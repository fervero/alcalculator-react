import React from "react";

function BodyConfig(props) {
	return <div className="form-inline well">
		<div className="form-group">
		<label htmlFor="body-mass">Weight (kg):&nbsp;</label>
			<input id="body-mass" className="form-control" type="number" min="10" max="200" 
				value={props.weight} 
				onChange={props.handleWeightChange} />
			<input className="form-control" type="range" min="10" max="200" 
				value={props.weight} 
				onChange={props.handleWeightChange} />
		
				</div>
		<div className="form-group">
			<label>Gender:&nbsp;</label>
			<label className="form-control">Male&nbsp;
				<input 
					type="radio" 
					value="male" 
					checked={ props.gender === "male" }
					onChange={props.handleSexChange}
				/>
			</label>
			<label className="form-control">Female&nbsp;
				<input 
					type="radio" 
					value="female" 
					checked={ props.gender === "female" }
					onChange={props.handleSexChange}
				/>
			</label>
		</div>
		<button onClick={props.addRow} className="btn btn-primary higher-2px-hack">Add a drink</button>

	</div>
}


export default BodyConfig
