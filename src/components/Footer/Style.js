import styled from "styled-components";

export const ContainerFooter = styled.div`
    margin-bottom: 0;
    background-color: #f2f2f2;
    padding: 10px 0;
`

export const ContainerSecoes = styled.div`
    display: flex;
    flex-direction: row;
    
    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
    }
`

export const Secao = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 22px 50px;


    h3{
        font-weight: 600;
        margin-bottom: 12px;
        margin-left: 4px;
    }

    a, p {
        font-size: 14px;
        padding: 5px;
        color: #535353;
        margin: 0;
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
    }
`
export const Icones = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    a{
        padding: 0;
        margin-right: 3px;
        color: black;
    }
`