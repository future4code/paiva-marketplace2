import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import axios from "axios";
import { ContainerCard, Card } from './Styled'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class CardPost extends React.Component {

  updateJob = (jobId) => {
    const URL = "https://labeninjas.herokuapp.com/jobs";
    const body = {
      taken: true
    };
    const headers = {
      headers: { Authorization: "6b5d3ade-aeb6-4364-91fa-b9a319e476c5" }
    };
    axios
      .post(`${URL}/${jobId}`, body, headers)
      .then((res) => {
        // Mensagem de adicionado ao carrinho

        toast.info('Adicionado ao carrinho', {
          position: "top-center",

          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        this.props.getAllJobs();
      })
      .catch((err) => {
        // Erro
        toast.error('Erro ao adicionar ao carrinho', {
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

  arrumaData = (d) =>{
    const data =d.split("-")
    const ano = data[0]
    const mes = data[1]
    const dia = data[2].slice(0, 2)    
    return dia + "/" + mes + "/" + ano;
  }

  render() {

    const listaFiltrada = this.props.servicos()

    const filterJobs = listaFiltrada.filter((servico) => {
      if (servico.taken === false) {
        return true;
      }
    });

    const jobs = filterJobs.map((job) => {

      let num = Math.floor(Math.random() * 100 + 1)

      return (
        <Card
          key={job.id}
          className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 bg-gray-200"
        >
          <div className="px-4 py-2">
            <h1 className="text-blue-700 font-bold text-2xl uppercase  ">
              {job.title}
            </h1>
            <p className="text-blue-700 text-sm mt-1">{job.description}</p>
          </div>
          <img
            className="h-56 w-full object-cover mt-2"
            src={`https://picsum.photos/200/300?random=${num}`}
            alt="foto aula/professor"
          />
          <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
            <span className="text-blue-700 font-bold text-sm">Prazo: {this.arrumaData(job.dueDate)}</span>
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
            <h1 className="text-blue-700 font-bold text-xl">
              R${job.price},00
            </h1>

            <button
              className="px-4 py-2 bg-blue-600 text-white text-lg  font-semibold rounded-full hover:bg-blue-800 inline-flex items-center "
              onClick={() => this.updateJob(job.id)}
            >

              Adicionar <HiShoppingCart className='ml-1'/>
            </button>
          </div>
        </Card>
      );
    });
    return (
      <div>
        <ContainerCard className="flex flex-wrap mx-5 justify-center items-center gap-4">
          {jobs}
        </ContainerCard>

        <ToastContainer />
      </div>
    );
  }
}
