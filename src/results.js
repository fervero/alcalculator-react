import React from 'react';

function Results(props) {
	const soberingCoefficient = 100/15;
	var calculatedBAC;
	function BAC(bodyMass, genderCoefficient, ethanolMass) {
		return genderCoefficient * ethanolMass / bodyMass;
	}
	function soberingTime(bac) {
		return Math.ceil(bac * soberingCoefficient);
	}
	return <output>
		<h3>Your blood alcohol level (&permil;):</h3>
		<span>{(calculatedBAC = BAC(props.bodyMass, props.genderCoefficient, props.alcohol)).toFixed(1)}</span>
		<h3>You'll be sober again in, approximately</h3>
		<span>{soberingTime(calculatedBAC)} hours</span>
	</output>
}

export default Results;
