import React from 'react'
import Design from '../components/Design/Design'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import "../tailwind.output.css"
import GlobalStyle from '../style/global';
import styled from 'styled-components'

const ContainerSobreNos = styled.div`
    padding: 20px;
    height: 50vh;
    h1{
        margin-top: 10px;
    }
    h3 {
        margin-bottom: 20px;
    }

    @media(max-width: 700px){
        height: 100%;
    }
`

export default class SobreNos extends React.Component {
    render(){
        return (
            <div>
                <Header />
				<Design />
                <ContainerSobreNos  className="flex flex-col h-screen">
                    <h1 className="text-blue-700 font-bold text-4xl text-center mb-3 mt-12">Equipe LABEPROF</h1>
                    <h3 className="text-black text-center mb-12">Apaixonados, sonhadores, utópicos, implicados, sérios, engajados, poliglotas e sempre prontos para uma aventura. Brasileiros, portugueses, belgas, franceses, ingleses, italianos, espanhóis, uma americana, dois indianos duas alemãs, uma japonesa, uma chilena, argentinos, uma holandesa, um indonésio e duas mexicanas, dois alemães e três colombianos.  </h3>
                    <h3 className="text-black text-center mb-48">LABEPROF é composto por quase 100 colaboradores situados na Embaixada do Intercâmbio de Saberes prontos a transmitir suas paixões em 28 países e 14 línguas.</h3>
                </ContainerSobreNos>
                <Footer />
                <GlobalStyle />
            </div>
        )
    }
}