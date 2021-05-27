import React from "react";
import "../../tailwind.output.css";

export default class Filtro extends React.Component {
  state = {
    ordenar: "decrescente"
  };
  // ordenarProdutos = (event) => {
  //   this.setState({ ordenar: event.target.value });
  // };
  // ordenarListaFiltrada = () => {
  //   return this.props.servico
  //     .filter((servico) =>
  //       this.props.maximo ? servico.preco < this.props.maximo : true
  //     )
  //     .filter((servico) =>
  //       this.props.minimo ? servico.preco > this.props.minimo : true
  //     )
  //     .filter((servico) =>
  //       this.props.buscaAula
  //         ? servico.nome.includes(this.props.buscaAula)
  //         : true
  //     )
  //     .sort((a, b) =>
  //       this.state.ordenar === "crescente"
  //         ? a.preco - b.preco
  //         : b.preco - a.preco
  //     );
  // };
  render() {
    // const ordenaListaFiltrada = this.ordenarListaFiltrada();
    return (
      <div className="grid grid-cols-3 justify-center items-center w-full m-2 p-2 rounded shadow bg-blue-100">
        <div className="flex justify-center">
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 text-sm bg-blue-200 rounded-md pl-10"
              placeholder="Pesquisar serviço..."
              autocomplete="off"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input
            className="bg-blue-200 m-1 rounded-md pl-1 py-2 text-sm"
            placeholder="Valor Mínimo"
            type="number"
          />
          <input
            className="bg-blue-200 m-1 rounded-md pl-1 py-2 text-sm"
            placeholder="Valor Máximo"
            type="number"
          />
          <button className=" text-white font-semibold bg-blue-400 hover:bg-blue-600 p-2 m-1 rounded ">
            Buscar
          </button>
        </div>
        <div className="flex justify-center items-center p-2 px-5 m-2">
          <label>
            <span className="font-semibold">Ordenar por: </span>
            <select
              className="bg-blue-400 text-white font-semibold" /*onChange={this.ordenarProdutos} value={this.state.ordenar}*/
            >
              <option value={"crescente"}>Crescente</option>
              <option value={"decrescente"}>Decrescente</option>
            </select>
            {/* <p>Mostrando: {ordenaListaFiltrada.length}Produtos</p> */}
          </label>
        </div>
      </div>
    );
  }
}