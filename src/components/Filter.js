import React from 'react';

class Filter extends React.Component{

	handleChange = (event) => {
		this.props.changeFilter(event.target.value)
	}

	render(){
		return(
			<div>
				<select value={this.props.currentFilter} onChange={this.handleChange}>
					{this.props.filters.map((filter,index)=> <option key={index} value={filter}>{filter}</option>)}
				</select>
			</div>
		)
	}
}

export default Filter