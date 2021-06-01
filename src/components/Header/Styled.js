import styled from "styled-components";

export const ContainerHeader = styled.div`
background-color: #f2f2f2;
    @media(max-width: 920px){
        display: flex;
        flex-direction: column;
    }
`

export const ContainerMenu = styled.div`

    button{
        font-size: 22px;

        :hover{
            background-color: #2C5282;
        }
        }
        
    @media(max-width: 700px){
        align-items: center;
        justify-content: center;
        
    }
`