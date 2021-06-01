import React from "react";
import "../../tailwind.output.css";
import {ContainerFiltro, Pesquisa, ContainerOrdenacao} from './Styled'

export default class Filtro extends React.Component {

  render() {
    return (
      <ContainerFiltro className="grid lg:grid-cols-3 md:grid-cols-1 justify-center items-center w-full p-2 rounded shadow bg-blue-100">
        <div className="flex justify-center">
          <Pesquisa className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">

              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>

            </span>

            <input
              type="search"
              name="q"
              className="py-2 text-sm bg-blue-200 rounded-md pl-10"
              placeholder="Pesquisar serviço..."
              autoComplete="off"
              value={this.props.inputSer}
              onChange={this.props.handleServico}
            />

          </Pesquisa>
        </div>
        <ContainerOrdenacao className="flex-col justify-center items-center">
            <input
              className="bg-blue-200 m-1 rounded-md pl-1 py-2 text-sm"
              placeholder="Valor Mínimo"
              type="number"
              value={this.props.valorMin}
              onChange={this.props.handleVMin}
            />
            <input
              className="bg-blue-200 m-1 rounded-md pl-1 py-2 text-sm"
              placeholder="Valor Máximo"
              type="number"
              value={this.props.valorMax}
              onChange={this.props.handleVMax}
            />


        </ContainerOrdenacao>
        <div className="flex justify-center items-center p-2 m-2 px-5">

          <label>
            <span className="font-semibold">Ordenar por: </span>

            <select
              className="bg-blue-400 text-white font-semibold" onChange={this.props.ordenarProdutos} value={this.props.ordenar}
            >
              <option value={"crescente"}>Menor Preço</option>
              <option value={"decrescente"}>Maior Preço</option>
              <option value={"titulo"}>Título</option>
              <option value={"prazo"}>Prazo</option>

            </select>

            {/* <p>Mostrando: {ordenaListaFiltrada.length}Produtos</p> */}
          </label>
        </div>
      </ContainerFiltro>
    );
  }
}
