import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import axios from "axios";

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
        alert("Aula adicionada ao carrinho");
        this.getAllJobs();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    const filterJobs = this.props.servicos.filter((servico) => {
      if (servico.taken === false) {
        return true;
      }
    });

    const jobs = filterJobs.map((job) => {
      
      let num = Math.floor(Math.random() * 100 + 1)

      return (
        <div
          key={job.id}
          className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 ml-8 bg-gray-200 "
        >
          <div className="px-4 py-2">
            <h1 className="text-blue-700 font-bold text-2xl uppercase  ">
              {job.title}
            </h1>
            <p className="text-blue-700 text-sm mt-1">{job.description}</p>
          </div>
          <img
            className="h-56 w-full object-cover mt-2"
            src= {`https://picsum.photos/200/300?random=${num}`}
            alt="foto aula/professor"
          />
          <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
            <h1 className="text-blue-700 font-bold text-xl">
              R${job.price},00
            </h1>

            <button
              className="px-6 py-2 bg-blue-600 text-white text-lg  font-semibold rounded-full hover:bg-blue-800 inline-flex items-center "
              onClick={() => this.updateJob(job.id)}
            >
              <HiShoppingCart />
              Adicionar
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center">
        {jobs}
      </div>
    );
  }
}
