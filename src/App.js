import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import porkers from './porkers_data'
import PigsContainer from './components/PigsContainer'
import Filter from './components/Filter'

class App extends Component {
	state = {
		pigs: porkers,
		currentFilter: "",
		currentSort: "",
		filters: ["name","weight","specialty", "medal", "greased"],
		sortTerms: ["name", "weight", "medal"]
	}

	changeFilter = (newFilter)=>{
		this.setState({currentFilter: newFilter})
	}

	render() {
		return (
		<div className="App">
			<Nav />
			<Filter changeFilter= {this.changeFilter} currentFilter={this.state.currentFilter} filters={this.state.filters}/>
			<PigsContainer pigs={this.state.pigs}/>
		</div>
		)
	}
}

export default App;

			// <Sort currentSort={this.state.currentSort} sortTerms={this.state.sortTerms}/>
			// <Filter currentFilter={this.state.currentFilter} filters={this.state.filters}/>