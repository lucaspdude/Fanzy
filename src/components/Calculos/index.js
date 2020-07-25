import react, { useState, useEffect } from 'react';

export function arredondaValor(numero) {
  return +`${Math.floor(`${numero}e+${2}`)}e-${2}`;
}

export function formataValorEmReal(numero) {
  return numero.toLocaleString('pr-BR', { minimumFractionDigits: 2 });
}

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
function ajustaCamposPedidos(comanda) {
  if (comanda) {
    const pedidosParse = comanda.pedidos.map(pedido => pedido);
    const pedidoProdutos = pedidosParse.map(item => {
      const filtered = [];
      // filtered.pedidos_usuarios = item.pedidos_usuarios;
      filtered.id = item.produto.id;
      filtered.observacoes = item.observacoes;
      filtered.entregue = item.entregue;
      filtered.produto = item.produto.produto;
      filtered.valor = item.produto.valor;
      filtered.quantidade = item.produto.quantidade;
      filtered.somaAdicionais = calcValorAdicionais(item.produto.adicionais);
      filtered.valorTotal = arredondaValor(
        item.produto.valor * item.produto.quantidade
      );
      filtered.usuarios = item.pedidos_usuarios;
      filtered.valorTotalGeral = arredondaValor(
        item.produto.valor * item.produto.quantidade +
          calcValorAdicionais(item.produto.adicionais)
      );
      filtered.created_at = item.produto.created_at;
      filtered.estabelecimento_id = item.produto.estabelecimento_id;
      filtered.adicionais = item.produto.adicionais;

      return filtered;
    });

    return pedidoProdutos;
  }
}

export function CalculaValorTotalMesa(comanda) {
  if (comanda.pedidos) {
    const pedidoProdutos = ajustaCamposPedidos(comanda.pedidos);

    if (pedidoProdutos) {
      const somaTotal = pedidoProdutos.reduce((total, objeto) => {
        return arredondaValor(total + objeto.valorTotalGeral);
      }, 0);

      return formataValorEmReal(somaTotal);
    }
  }
}

export function PedidosComanda(comanda) {
  if (comanda.pedidos) {
    const comandaPedidos = comanda.pedidos;
    const usuarios = comandaPedidos.usuarios;

    const filtered = {};
    filtered.chamados = comandaPedidos.chamados;
    filtered.created_at = comandaPedidos.created_at;
    filtered.estabelecimento = comandaPedidos.estabelecimento;
    filtered.estabelecimento_id = comandaPedidos.estabelecimento_id;
    filtered.id = comandaPedidos.id;
    filtered.mesa = comandaPedidos.mesa;
    filtered.mesa_id = comandaPedidos.mesa_id;
    filtered.created_at = comandaPedidos.created_at;
    filtered.pedidos = ajustaCamposPedidos(comandaPedidos);
    filtered.updated_at = comandaPedidos.updated_at;
    // filtered.usuarios = comandaPedidos.usuarios.map(usuario => usuario);
    filtered.usuarios = 'something';
    filtered.valortotal = comandaPedidos.valortotal;
    return filtered;
  }
}




export function formataEmReal(str) {
  var int = parseInt(str.replace(/[\D]+/g, ''));
  var tmp = int + '';
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.length > 6)
      tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  return tmp;
}



export function SomaPagamentos(pagamentos){
  if(pagamentos.length > 0){

    const ValorTotalPago = pagamentos
    .filter(pagamento => {
      return pagamento.status === 1;
    })
    .reduce((total, obj) => {
      return total + arredondaValor(obj.valor)
    },0)

    return formataValorEmReal(ValorTotalPago)
  }
  

}