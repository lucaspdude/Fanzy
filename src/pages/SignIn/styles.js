import styled from 'styled-components';
import img1 from '../../assets/images/bg_signIn.png';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        width: 60%;
        display: block;
        margin: 0 auto;
        input{
          ::placeholder{
            text-transform: capitalize;
          }
        }
        button{
            margin: 0 0 50px 0;
            font-size: 16px;
            text-transform: capitalize;
            min-width: 200px;
            height: 46px;
        }
    }
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
    max-height: 85px;
    margin-bottom: 50px;
    transform: rotate(-5deg);
`;

export const ImageBG = styled.div`
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
    border-left: 10px solid #FFFFFF;
    @media(max-width: 992px){
        display: none;
    }
`;

export const Links = styled.div`
    button{
        padding: 10px 40px;
    }
    a{
        color: #FFFFFF;
        text-decoration: none;
        display: block;
        margin-bottom: 10px;
        font-size: 16px;
        &:hover{
            color: #FFC536;
            text-decoration: underline;
        }
    }
`;
