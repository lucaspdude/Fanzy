import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import { useSelector } from 'react-redux';
import { formataValorEmReal, formataEmReal } from '~/components/Calculos';
import { Link } from 'react-router-dom';

export default function MaisConsumidos() {

    const [itens, setItems] = useState();
    const profile = useSelector(state => state.user.profile)

    function parseItensDosPedidos(pedidos){

        const produtos = pedidos.map(pedido => {
            const filtered = {};
            filtered.produto = pedido.produto.produto;
            filtered.quantidade = pedido.produto.quantidade;
            filtered.valor = pedido.produto.valor;
            filtered.id = pedido.produto.produto_id;
            return filtered;
        });

        
            var tmp = {};
            produtos.forEach(function (item) { 
                var tempKey = item.id
                if(!tmp.hasOwnProperty(tempKey)){
                    tmp[tempKey] = item;
                }else{
                   
                    tmp[tempKey].quantidade = item.quantidade + tmp[tempKey].quantidade + item.quantidade;

                }
            })

            console.log(produtos)
            var results = Object.keys(tmp).map(function(key){
                return tmp[key];
            })

            console.log(results)
            
       
        return results;

    }

    useEffect(() => {
        api.get(`relatorios/maisvendidos/${profile.id}`)
            .then(response => {
                setItems(parseItensDosPedidos(response.data.pedidos))
            })
            .catch(error => {console.log(error)})
    }, [])




    return (
        <div>
            {itens && (
                <ul className="mais-consumidos">
                    {itens.slice(0,5).map(item => {
                        return(
                            <li key={item.id} className="mais-consumidos-item">

                                <span className="descricao">
                                    <Link to={`/dashboard/cardapios/${item.id}`}>
                                        {item.produto}
                                    </Link>
                                </span>
                                <span className="valor">R$ { formataEmReal(item.valor) }</span>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
