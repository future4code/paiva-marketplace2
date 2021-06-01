import React from "react";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

const Botao = styled.button`
    border-radius: 5px;
    background-color: #346FCE;

    :hover{
        background-color: #2C5282;
    }
`

const Formulario  = styled.form`
    display: flex;
    align-items: center;

    select{
        background-color: #346FCE;

    :hover{
        background-color: #2C5282;
    }
    }
`


export default class CarrinhoTotal extends React.Component {
    botaoFinalizar = () => {
        this.props.removerTodos()
        this.compraFinalizada()
    }

    compraFinalizada = () => {
        return window.confirm("Compra finalizada com sucesso!")
    }

    render() {

        return (
            <div>
                <ToastContainer />
                <div className="flex justify-center my-4 mt-6 -mx-2 lg:flex">
                    <div className="lg:px-2 lg:w-1/2 ">
                        <div className="p-4 bg-gray-100 rounded-full">
                            <h1 className="ml-2 font-bold uppercase text-center">
                                Detalhes da compra
                    </h1>
                        </div>
                        <div className="p-4">


                            <div className="flex justify-between pt-4 border-b">
                                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                    Total
                      </div>
                                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                    R${this.props.valorTotal},00
                      </div>
                            </div>
                            <Formulario className="flex rounded-md text-base p-2 font-medium uppercase ml-auto" name="formasPagamento" id="formasPagamento">
                                <label for="formasPagamento">Formas de pagamento:</label>

                                <select className="flex bg-blue-800 rounded-md text-base px-4 py-2 font-medium	text-white uppercase ml-auto" name="formasPagamento" id="formasPagamento">
                                    <option value="dinheiro">Dinheiro</option>
                                    <option value="cartao">Cartão</option>
                                    <option value="boleto">Boleto</option>
                                    <option value="pix">Pix</option>
                                </select>
                            </Formulario>
                            <Link to="/">
                                <Botao onClick={this.botaoFinalizar} className="flex justify-center items-center px-4 py-2 mt-6 font-medium text-white uppercase bg-blue-800 shadow item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                                    <FaCreditCard className="text-blue-500 w-8 h-8" />
                                    <span className="ml-2 mt-5px text-base">
                                        Finalizar compra
                        </span>
                                </Botao>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}