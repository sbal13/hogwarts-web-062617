import React from 'react';

class Filter extends React.Component{

	state = {
		greasedInput: false,
		nameInput: '',
		specialtyInput: '',
		medalInput: '',
	}

	handleInputs = () => {
		this.setState({ 
			greasedInput: !!this.refs.greasedInput.checked,
			nameInput: this.refs.nameInput.value.toLowerCase(),
			specialtyInput: this.refs.specialtyInput.value.toLowerCase(),
			medalInput: this.refs.medalInput.value.toLowerCase(),
		}, this.handleChange)
	}

	handleChange = () => {
		this.props.changeFilter(this.state)
	}

	handleFilterToggle = (event) => {
		this.props.toggleFilter(event.target.checked)
	}

	render(){
		const displayedFilters = 
			<div>
			<form onSubmit={this.handleChange}>
				<label>Greased: </label>
				<input type="checkbox" ref="greasedInput" checked={this.state.greasedInput} onChange={this.handleInputs}/>
				<label>Name: </label>
				<input type="text" ref="nameInput" value={this.state.nameInput} onChange={this.handleInputs}/>
				<label>Specialty: </label>
				<input type="text" ref="specialtyInput" value={this.state.specialtyInput} onChange={this.handleInputs}/>
				<label>Medal: </label>
				<input type="text" ref="medalInput" value={this.state.medalInput} onChange={this.handleInputs}/>
			</form>
			</div>

		return(
			<div>
				Filter: <input type="checkbox" checked={this.props.isFiltered} onChange={this.handleFilterToggle}/>
				{this.props.isFiltered ? displayedFilters : null}
			</div>
		)
	}
}

export default Filter

				// <select value={this.props.currentFilter} onChange={this.handleChange}>
				// 	{this.props.filters.map((filter,index)=> <option key={index} value={filter}>{filter}</option>)}
				// </select>