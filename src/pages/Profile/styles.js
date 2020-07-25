import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
display: flex;
flex-direction: column;
h3{
  color: #ffffff;
  margin-bottom: 30px
  text-align: center;
}
form{
    width: 70%;
    display: block;
    // margin: 0 auto;
    button{
        margin-bottom: 30px;
    }
    input, select{
      background: #333333;
      border-radius: 5px;
      color: #fff;
    }
}
`;


export const ContainerSimples = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;

.hidden{
  display: none;
}





}

`;
