import React from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import CarrinhoTotal from "../components/CarrinhoTotal/CarrinhoTotal"
import Footer from "../components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '../style/global';
import styled from "styled-components";

const Botao = styled.button`
  background-color: #346FCE;

  :hover{
    background-color: #2C5282;
  }
`

export default class Carrinho extends React.Component {
  state = {
    jobsCarrinho: []
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = async () => {
    const URL = "https://labeninjas.herokuapp.com/jobs";
    const headers = {
      headers: { Authorization: "6b5d3ade-aeb6-4364-91fa-b9a319e476c5" }
    };
    try {
      const res = await axios.get(`${URL}`, headers);
      this.setState({ jobsCarrinho: res.data.jobs });
      
    } catch (error) {
      alert(error);
    }
  };

  removerJob = (jobId) => {
    const URL = "https://labeninjas.herokuapp.com/jobs";
    const body = {
      taken: false
    };
    const headers = {
      headers: { Authorization: "6b5d3ade-aeb6-4364-91fa-b9a319e476c5" }
    };
    axios
      .post(`${URL}/${jobId}`, body, headers)
      .then((res) => {
        toast.info('Item removido do carrinho', {
          posição: "superior direito",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          arrastável: true,
          progresso: undefined,
        });
        this.getAllJobs();
      })
      .catch((err) => {
        toast.error('Erro ao remover item do carrinho', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  removerTodos = () => {
    this.state.jobsCarrinho.forEach((job) => {
      if (job.taken === true) {
        this.removerJob(job.id)
      }
    })
  }

  render() {
    const servicosCarrinho = this.state.jobsCarrinho.filter((jobCart) => {
      if (jobCart.taken === true) {
        return true;
      }
    });
 
    const servicos = servicosCarrinho.map((servico) => {

      let num = Math.floor(Math.random() * 100 + 1)

      return (
        <tr key={servico.id}>
          <td className="hidden pb-4 md:table-cell">

            <img
              src={`https://picsum.photos/300/200?random=${num}`}
              className="w-20 rounded"
              alt="Thumbnail"
            />

          </td>
          <td>

            <p className="mb-2 md:ml-4">{servico.title}</p>

            <button onClick={() => this.removerJob(servico.id)} type="submit" className="text-gray-700 md:ml-4">
              <small>(Remover item)</small>
            </button>

          </td>
          <td className="hidden text-right md:table-cell">
            <span className="text-sm lg:text-base font-medium">
              R$ {servico.price},00
                      </span>
          </td>
        </tr>
      );
    });

    const valorTotal = servicosCarrinho.reduce((prevVal, elem) => prevVal + elem.price, 0)

    return (
      <div>
        <Header />
        <div className="h-full">
          <div className="flex justify-center my-24">
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
              <div className="flex-1">
                <table className="w-full text-sm lg:text-base" cellSpacing="0">
                  <thead>
                    <tr className="h-12 uppercase">
                      <th className="hidden md:table-cell"></th>
                      <th className="text-left">Produto</th>

                      <th className="hidden text-right md:table-cell">
                        Preço unitário
                    </th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicosCarrinho.length ? servicos : <div>Seu carrinho está vazio</div> }
                  </tbody>
                </table>
                <Botao onClick={this.removerTodos} className="flex bg-blue-800 rounded-md text-base px-4 py-2 font-medium	text-white hover:bg-red-600 uppercase ml-auto">
                  Remover todos os itens
              </Botao>


                <hr className="pb-6 mt-6" />
                {<CarrinhoTotal
                  valorTotal={valorTotal}
                  removerTodos={this.removerTodos}
                />}
              </div>
            </div>
          </div>

        </div>
        <Footer />
        <ToastContainer />
        <GlobalStyle />
      </div>
    );
  }
}
