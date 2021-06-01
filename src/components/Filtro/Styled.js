import styled from "styled-components";

export const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #F2F2F2;

    select {
        padding: 5px;
        border-radius: 5px;
        outline: none;
        background-color: white;
        color: gray;
    }

    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
            width: 95vw;
        }
    }
    
`

export const Pesquisa = styled.div`
    margin-right: 10px;
    
    input{
        padding: 6px 40px;
        border-radius: 5px;
        background-color: white;
    }

    @media(max-width: 700px){
        width: 95vw;
        margin-bottom: 3px;
        margin-right: 0;

        input {
            width: 100%;
        }
    }
`

export const ContainerOrdenacao = styled.div`
    input{
        margin-left: 2px;
        padding: 6px;
        border-radius: 5px;
        background-color: white;
    }
`