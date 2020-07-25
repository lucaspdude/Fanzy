import styled from 'styled-components';

export const Cards = styled.div`
  .card {
    margin-bottom: 20px;
    font-size: 1rem;
  }
  .pausar__vendas {
    width:15px;
    height: 10px;
    background-image: url("https://via.placeholder.com/50x10");
    border: 1px solid red;
  }
  .editar__item {
    width:15px;
    height: 10px;
    background-image: url("https://via.placeholder.com/50x10");
    border: 1px solid red;
  }
  .colapsar__item {
    width:15px;
    height: 10px;
    background-image: url("https://via.placeholder.com/50x10");
    border: 1px solid red;
  }
.cardapio__categoria--titulo {
  padding-left: 15px;
  padding-right: 15px;
  background-color: #333;
  height: 55px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  h3 {
    color:#eee;
  }
}
.item__selecionado {
  font-size: 1rem;
  height: 200px;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-flow: row wrap;
  margin-top:20px;

}

.foto__produto {
  max-width: 200px;
  margin-left: 15px;
}

.cardapio__item{
  margin-top: 20px;
  padding: 5px 0;
  border-bottom: 1px solid lightgrey;
  font-size: 1rem;
  color: $grey;
  margin-top: 5px;

}
.cardapio__item--info {
  display: flex;
  flex-direction: column;
  max-width: min-content;
  margin-left: 15px;

}

.cardapio__item--descricao {

  margin-bottom: 20px;
  font-size: 1rem;
}
.cardapio__item--adicionais {


}
`;
