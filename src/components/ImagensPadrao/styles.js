import styled from 'styled-components';

export const Container = styled.div`

    margin-top: 15px;
    img.imagem{
        width: 100%;
    }

    label{
        margin-top: 15px;
        border: 2px solid transparent;
        width: 33%;
        // padding: 5px;

        img {
            object-fit: cover;
            width: 150px;
            height: 150px;
        }

    }

    input[type='radio'] {
        display: none !important;
    }

    input[type='radio']:checked + label{
        box-sizing: border-box;
        border: 2px solid rgb(33, 179, 89);
        box-shadow: 0.5px 0.5px 5px #000;
    }

    
`;