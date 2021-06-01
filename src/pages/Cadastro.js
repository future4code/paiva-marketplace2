import React from "react";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import FormCadastro from "../components/Form-cadastro/FormCadastro";
import Header from "../components/Header/Header";
import Prof from "../img/prof.jpg"
import "../tailwind.output.css";
import GlobalStyle from '../style/global';

const ContainerPrincipal = styled.div ` 
  display: flex;
  width: 100vw;
  height: 100%;
  gap: 2%;
  padding: 5% 5%;
`

const ContainerImg = styled.div`
  max-width: 40%;
  max-height: 40%;
` 

const ImgLateral = styled.img`
  max-height: 100%;
  max-width: 100%;

  @media(max-width: 700px){
    display: none;
  }
`

export default class Cadastro extends React.Component {
  render() {
    return (
      <div>
        <Header />      
        
        <ContainerPrincipal>

            <FormCadastro />

            <ContainerImg >
              <ImgLateral src={Prof} alt="imagem professor" className="shadow" />
            </ContainerImg>
            
        </ContainerPrincipal>   
                
        <Footer />
        <GlobalStyle />

      </div>
    );
  }
}
