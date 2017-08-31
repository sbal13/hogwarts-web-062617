import React from 'react';

const Pig = ({ attributes }) => {
	const picturePath = `./hog-imgs/${attributes.name.toLowerCase().replace(/\s/g, "_")}.jpg`
	return (

		<div>
			<h2>{attributes.name}</h2>
			<p>Specialty: {attributes.specialty}</p>
			<p>{attributes.greased ? "Greased" : "Ungreased"}</p>
			<p>Weight: {attributes.weight}</p>
			<p>Highest medal achieved: {attributes.medal}</p>
			<img src={picturePath}/>

		</div>
		)
}

export default Pig