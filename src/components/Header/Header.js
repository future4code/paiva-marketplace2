import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "../../tailwind.output.css";
import logo from "../../img/logo.png"
import { ContainerHeader, ContainerMenu } from './Styled'


export default class Header extends React.Component {
  render() {
    return (
      <ContainerHeader className="w-full grid grid-cols-3 bg-white shadow items-center justify-center md:flex-row">


        <div className="flex justify-center items-center col-start-2 w-64 font-bold text-gray-800 p-4 m-auto">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>


        <ContainerMenu className="col-start-3 flex justify-center items-center md:flex-row">
          <Link to="/cadastro" className="text-gray-800 rounded hover:bg-blue-800 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
            <button>Dar aulas</button>
          </Link>
          <Link to="/SobreNos" className="text-gray-800 rounded hover:bg-blue-800 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
            <button>Sobre nós</button>
          </Link>
          <Link to="/carrinho/:produtosCarrinho" className="text-gray-800 rounded hover:bg-blue-800 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
            <button>
              <HiShoppingCart />
            </button>
          </Link>
        </ContainerMenu>


      </ContainerHeader>

    );
  }
}
