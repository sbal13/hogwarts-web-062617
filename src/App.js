import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import porkers from './porkers_data'
import PigsContainer from './components/PigsContainer'
import Filter from './components/Filter'
import Sort from './components/Sort'

class App extends Component {
	state = {
		pigs: porkers,
		currentFilter: "",
		currentSort: "",
		filters: ["name","weight","specialty", "medal", "greased"],
		sortTerms: ["name", "weight"],
		isGreased: null,
		isFiltered: false,
		orderByAsc: true,
	}

	// changeFilter = (toggleGreased) =>{
	// 	if (this.state.isFiltered){
	// 		let filteredPigs = porkers.filter(pig => pig.greased === toggleGreased)
	// 		this.setState({isGreased: toggleGreased, pigs: filteredPigs})
	// 	} else {
	// 		this.setState({pigs: porkers})
	// 	}
	// }

	changeFilter = (filters) =>{
		console.log(filters)
		if (this.state.isFiltered){
			let filteredPigs = porkers.filter(pig => pig.greased === filters.greasedInput)
			filteredPigs = filteredPigs.filter(pig => pig.name.toLowerCase().includes(filters.nameInput))
			filteredPigs = filteredPigs.filter(pig => pig.specialty.toLowerCase().includes(filters.specialtyInput))
			filteredPigs = filteredPigs.filter(pig => pig.medal.toLowerCase().includes(filters.medalInput))
			this.setState({pigs: filteredPigs})
		} else {
			this.setState({pigs: porkers})
		}
	}

	toggleFilter = (toggleFilter) => {
		const selectedPigs = toggleFilter ? this.state.pigs : porkers
		this.setState({isFiltered: toggleFilter, pigs: selectedPigs})
	}

	changeSort = (sortType) => {
		if (this.state.isFiltered){
			let sortedPigs = this.state.pigs.sort((pig1, pig2) => pig1[sortType] < pig2[sortType] ? -1 : 1)
			this.setState({currentSort: sortType, pigs: sortedPigs})
		} else {
			let sortedPigs = porkers.sort((pig1, pig2) => pig1[sortType] < pig2[sortType] ? -1 : 1)
			this.setState({currentSort: sortType, pigs: sortedPigs})
		}
	}

	render() {
		console.log(this.state)
		return (
		<div className="App">
			<Nav />
			<Filter isFiltered={this.state.isFiltered} toggleFilter={this.toggleFilter} changeFilter= {this.changeFilter} currentFilter={this.state.currentFilter} filters={this.state.filters} isGreased={this.state.greased}/>
			<Sort orderByAsc={this.state.orderByAsc} changeSort={this.changeSort} currentSort={this.state.currentSort} sortTerms={this.state.sortTerms}/>
			<PigsContainer isGreased={this.state.isGreased} pigs={this.state.pigs}/>
		</div>
		)
	}
}

export default App;

			// <Filter currentFilter={this.state.currentFilter} filters={this.state.filters}/>