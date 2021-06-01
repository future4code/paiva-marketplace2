import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
  height: 100%;
  /* h2 {
    font-size: 24px;
    font-weight: 600;
  } */
  input {
    padding: 6px;
    border-radius: 5px;
  }

  button{
    width: 22%;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: #346FCE;

    :hover{
      background-color: #2C5282;
    }
  }

  @media(max-width: 700px){
    width: 100%;
    gap: 0;

    input{
      width: 100%;
      margin-bottom: 10px;
    }
  } 
`

export const FormLine = styled.div`
  display: flex; 
  justify-content: left ;   
  align-items: center;

  input{
    margin-left: 10px;
    width: 70%;
  }

  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    width: 100%;

    input{
      width: 100%;
    }

    h3{
      text-align: left;
    }
  }     
`

export const Form = styled.div`
  display: flex;
  flex-direction: row;

    input {
    width: 50%;
  }

  @media(max-width: 700px){
    flex-direction: column;

    input{
      width: 100%;
    }
  }
`
export const FormInfo = styled.div`
  display: flex; 
  flex-direction: column;    

  textarea {
    padding: 6px;
    border-radius: 5px;
  } 
  @media(max-width: 700px){
    textarea{
      margin-bottom: 10px;
    }
  }
`

export const ContCheck = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input{
      margin-left:0.1em;
      
  }
  @media(max-width: 700px){
    div {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      width: 22%;
      margin: 0;
      
    }
    input{
      width: 50%;
      margin-bottom: 0;
    }
  } 
`