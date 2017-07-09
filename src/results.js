import React from 'react';

function Results(props) {
	const soberingCoefficient = 100/15;
	function BAC(bodyMass, genderCoefficient, ethanolMass) {
		return genderCoefficient * ethanolMass / bodyMass;
	}
	function soberingTime(bac) {
		return Math.ceil(bac * soberingCoefficient);
	}
	var calculatedBAC = BAC(props.bodyMass, props.genderCoefficient, props.alcohol);
	var buttonColor = "btn-info";
	if(calculatedBAC > 0.2) buttonColor = "btn-warning";
	if(calculatedBAC > 0.5) buttonColor = "btn-danger";

	return (
		<output className="row">
			<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
				<div className={"btn btn-block " + buttonColor}>
					<p className="h3">Your blood alcohol level (&permil;):</p>
					<span className="h3">{(calculatedBAC).toFixed(1)}</span>		
				</div>
			</div>
			<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
				<div className={"btn btn-block " + buttonColor}>
					<p className="h3">You'll be sober again in, approximately:</p>
					<span className="h3">{soberingTime(calculatedBAC)} hours</span>		
				</div>
			</div>
		</output>)
}

export default Results;
