import React from "react";

class BodyConfig extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div>
			<label>Weight (kg):
				<input type="number" min="10" max="200" 
					value={this.props.weight} 
					onChange={this.props.handleWeightChange} />
				<input type="range" min="10" max="200" 
					value={this.props.weight} 
					onChange={this.props.handleWeightChange} />
			</label>
			<div>
				<span>Gender:</span>
				<label>Male 
					<input 
						type="radio" 
						value="male" 
						checked={ this.props.gender === "male" }
						onChange={this.props.handleSexChange}
					/>
				</label>
				<label>Female 
					<input 
						type="radio" 
						value="female" 
						checked={ this.props.gender === "female" }
						onChange={this.props.handleSexChange}
					/>
				</label>
			</div>
			<button onClick={this.props.saySex}>+</button>
		</div>
	}
}

export default BodyConfig
