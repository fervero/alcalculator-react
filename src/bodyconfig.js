import React from "react";

function BodyConfig(props) {
	return <div>
		<label>Weight (kg):
			<input type="number" min="10" max="200" 
				value={props.weight} 
				onChange={props.handleWeightChange} />
			<input type="range" min="10" max="200" 
				value={props.weight} 
				onChange={props.handleWeightChange} />
		</label>
		<div>
			<span>Gender:</span>
			<label>Male 
				<input 
					type="radio" 
					value="male" 
					checked={ props.gender === "male" }
					onChange={props.handleSexChange}
				/>
			</label>
			<label>Female 
				<input 
					type="radio" 
					value="female" 
					checked={ props.gender === "female" }
					onChange={props.handleSexChange}
				/>
			</label>
		</div>
		<button onClick={props.saySex}>+</button>
	</div>
}


export default BodyConfig
