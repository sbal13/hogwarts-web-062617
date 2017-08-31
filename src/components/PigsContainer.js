import React from 'react';

import Pig from './Pig';

class PigsContainer extends React.Component{

	

	render(){
		const filteredPigs = this.props.isGreased === null ? this.props.pigs : this.props.pigs.filter(pig => pig.greased === this.props.isGreased)
		const pigCards = filteredPigs.map((pig,index) => <Pig key={index} attributes={pig}/>)

		return (
			<div>
				{pigCards}
			</div>
		)
	}
}

export default PigsContainer