import styled from "styled-components";

export const ContainerCard = styled.div`
    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
    }

    button{
      border-radius: 5px;
      background-color: #346FCE;

      :hover{
        background-color: #2C5282;
      }
    }
`

export const Card = styled.div`
    width: 40rem;
    height: 440px;
    justify-content: space-evenly;
    align-content: space-between;
    /* faz quebrar a linha com ... */
    flex-wrap: wrap;
    min-width: 0;
    animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    @keyframes fade-in-right {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}



    p{
        /* para não ter barra de rolagem */
        overflow: hidden;
        /* para não quebrar linha */
        white-space: nowrap;
        /* faz ... parecer quando passar do min width do container acima */
        text-overflow: ellipsis;
        margin: 0;
    }
    @media(max-width: 700px){
        width: 100%;
        margin-left: 0;
    }
`