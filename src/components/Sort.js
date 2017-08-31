import React from 'react'

class Sort extends React.Component {

	state = {

	}

	handleChange = (event) => {
		this.props.changeSort(event.target.value)
	}

	render() {
		return (
			<div>
				<select value={this.props.currentSort} onChange={this.handleChange}>
					{this.props.sortTerms.map((term,index)=> <option key={index} value={term}>{term}</option>)}
				</select>
				<input type="radio" value="asc" checked={} >asc</input>
				<input type="radio" value="desc">desc</input>
			</div>
			)
	}
}

export default Sort