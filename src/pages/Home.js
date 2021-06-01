import React from 'react'
import CardPost from '../components/CardPost/CardPost'
import axios from "axios";
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Filtro from '../components/Filtro/Filtro'
import Design from '../components/Design/Design'
import GlobalStyle from '../style/global';


export default class Home extends React.Component {
	state = {
		servicos: [],
		ordenar: "decrescente",
		valorMax: "",
		valorMin: "",
		inputSer: "",	
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
			this.setState({ servicos: res.data.jobs });
			// console.log( "requisicao", this.state.servicos);
		} catch (error) {
			alert(error);
		}
	};

	ordenarListaFiltrada = () => {
		let valorMax
		let valorMin

		if (this.state.valorMax === "" ) {
		  valorMax = Infinity
		} else {
			valorMax =this.state.valorMax
		}
		
		if (this.state.valorMin === "" ) {
			valorMin = -Infinity
		} else {
			valorMin = this.state.valorMin
		}
		
		return 	this.state.servicos
		  .filter(servico => servico.price >= valorMin)			  
		  .filter(servico => servico.price <= valorMax)			
		  .filter(servico => servico.title.includes(this.state.inputSer))
		  .sort((a, b) => {
			switch (this.state.ordenar){
				case ("crescente"):
					return a.price - b.price;
				case ("decrescente"):
					return b.price - a.price;
				case ("titulo"):
					return a.title.localeCompare(b.title);
				case ("prazo"):
					return a.duedate - b.duedate;
			}
		  })	
	  };
	
	  handleServico = (e) => {
		this.setState({inputSer: e.target.value })
	  }
	
	  handleVMax = (e) => {
		this.setState({valorMax: e.target.value })
	  }
	
	  handleVMin = (e) => {
		this.setState({valorMin: e.target.value })
	  }
	
	  ordenarProdutos = (event) => {
		this.setState({ ordenar: event.target.value });
	  };


	render() {	
		
		return (
			<div>
				<Header />
				<Design />	
				<Filtro
					getAllJobs={this.getAllJobs}
					servicos={this.state.servicos}
					ordenarListaFiltrada={this.ordenarListaFiltrada}
					ordenarProdutos ={this.ordenarProdutos}
					handleVMin ={this.handleVMin}
					handleVMax ={this.handleVMax}
					handleServico ={this.handleServico}
					valorMin  ={this.state.valorMin}
					valorMax ={this.state.valorMax}
					inputSer ={this.state.inputSer}
					ordenar ={this.state.ordenar}
				/> 
				<CardPost 
					getAllJobs={this.getAllJobs}
					servicos={this.ordenarListaFiltrada }
				/>		
				<Footer /> 
				<GlobalStyle />
			</div>
		)


	}

}

