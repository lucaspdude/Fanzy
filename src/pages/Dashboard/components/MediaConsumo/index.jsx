import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import { useSelector } from 'react-redux';
import { formataValorEmReal, formataEmReal } from '~/components/Calculos';
import { Link } from 'react-router-dom';

export default function MediaConsumo() {

    const [mesasPedidos, setMesasPedidos] = useState([]);
    const [clientes, setClientes] = useState([]);


    const profile = useSelector(state => state.user.profile)


    function calcValorAdicionais(adicionais) {
        const adicionalSoma = adicionais.map(adicional => {
          const filtered = [];
          filtered.valor = adicional.valor;
          filtered.quantidade = adicional.quantidade;
          filtered.valortotal = adicional.valor * adicional.quantidade;
          return filtered;
        });
        return adicionalSoma.reduce((total, obj) => {
          return arredondaValor(total + obj.valortotal);
        }, 0);
      }


    function arredondaValor(numero) {
        return +`${Math.floor(`${numero}e+${2}`)}e-${2}`;
    }



    function calculaValorPedidoPorUsuario(pedidos){

        // console.log(pedidos)
        const pedidosAjustados = pedidos.map(pedido => {
            const filtered = {};
            filtered.id = pedido.id
            filtered.produto = pedido.produto.produto
            filtered.valorAdicionais = calcValorAdicionais(pedido.produto.adicionais);
            filtered.valorProduto = arredondaValor(pedido.produto.valor * pedido.produto.quantidade);
            filtered.valorTotalPedido = arredondaValor(filtered.valorAdicionais + filtered.valorProduto);
            filtered.valorDoUsuario = arredondaValor(filtered.valorTotalPedido / pedido.pedidos_usuarios.length)
            return filtered;
        });
        return pedidosAjustados
        

    }

    function preparaDados(mesas){
        // console.log(mesas)
        const usuariosPorMesa = mesas.map(mesa => {
            const filtered = {};

            filtered.usuarios = mesa.usuarios.map(usuario => {
                const filtered = {};
                filtered.id = usuario.user.id;
                filtered.nome = usuario.user.name
                filtered.url = usuario.user.media[0].url
                filtered.consumo = calculaValorPedidoPorUsuario(mesa.pedidos)
                filtered.valorMedio = formataValorEmReal(filtered.consumo.reduce((total, objeto) => {
                    return total + objeto.valorDoUsuario
                } ,0)) 
                return filtered;
            });
            // filtered.usuario.consumo = calculaValorPedidoPorUsuario(mesa.pedidos)

              
            return filtered.usuarios;
        })
        const flattened = usuariosPorMesa.flat();
        return flattened;
        
    }

    useEffect(() => {
        api.get(`relatorios/pedidos/${profile.id}`)
            .then(response => {
                setMesasPedidos(response.data.mesaspedidos);
                setClientes(preparaDados(response.data.mesaspedidos))
            })
            .catch(error => {console.log(error)})
    }, [])




    return (
        <div>
            {clientes && (
                <ul className="mais-consumidos">
                    {clientes.slice(0,5).map(cliente => {
                        return(
                            <li key={cliente.id} className="mais-consumidos-item">

                                <span className="descricao">
                                    <Link to={`/dashboard/clientes/${cliente.id}`}>
                                    {cliente.nome}
                                    </Link>
                                    
                                </span>
                                <span className="valor">R$ { cliente.valorMedio }</span>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
