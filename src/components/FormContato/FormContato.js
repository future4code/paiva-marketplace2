import React from 'react';
import styled from 'styled-components';
import "../../tailwind.output.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ContainerForm} from './Styled'


export default class FormContato extends React.Component {
    state = {
        inputNome: "",
        inputEmail: "",
        inputMsg: "",
    }
    
    handleEmail = (e) => {
        this.setState({inputEmail: e.target.value})
    }

    handleNome = (e) => {
        this.setState({inputNome: e.target.value})
    }

    handleMsg = (e) => {
        this.setState({inputMsg: e.target.value})
    }

    enviaForm = () => {
        toast.info('Mensagem enviada', {
            posição: "superior direito",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            arrastável: true,
            progresso: undefined,
          });
        
        this.setState({
            inputNome: "",
            inputEmail: "",
            inputMsg: ""
        })        
    }

    render(){
        return (   
            <ContainerForm >          
            <form className="w-full max-w-lg">

                <div className="flex flex-wrap -mx-3 mb-6">
                   
                    <div className="w-full px-3">

                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Nome
                        </label>

                        <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="nick" 
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={this.state.inputNome}
                        onChange = {this.handleNome}
                        />                        
                    </div>

                </div>

                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full px-3">

                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            E-mail
                        </label>

                        <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="email" 
                        type="email"
                        placeholder="Digite seu email"
                        value={this.state.inputEmail}
                        onChange = {this.handleEmail}
                        />   

                    </div>

                </div>

                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full px-3">

                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Menssagem
                        </label>

                        <textarea 
                        className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
                        id="message"
                        placeholder="Digite seu menssagem"
                        value={this.state.inputMsg}
                        onChange = {this.handleMsg}
                        >
                        </textarea>   

                    </div>

                </div>

                <div className="md:flex md:items-center">
                   
                    <div className="md:w-1/3">

                        <button 
                        className="bg-blue-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600"
                        type="button"
                        onClick={this.enviaForm}
                        >  Enviar
                        </button>

                        </div>

                    <div className="md:w-2/3"></div>
               
                </div>
            </form>
            <ToastContainer />
        </ContainerForm>  
                                     
        )
    }
}