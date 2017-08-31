import React from 'react';

import Pig from './Pig';

class PigsContainer extends React.Component{

	

	render(){
		const pigCards = this.props.pigs.map((pig,index) => <Pig key={index} attributes={pig}/>)

		return (
			<div>
				{pigCards}
			</div>
		)
	}
}

export default PigsContainer