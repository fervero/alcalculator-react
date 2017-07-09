import React from "react";

function OneDrink(props) {
	const drinkUpdater = (e) => props.drinkUpdater(
			props.id, 
			Object.assign(
				{alcoholType: e.target.value}, 
				props.drinkTypes[e.target.value]) 
			);
	return (
		<div className="form-inline">
			<div className="form-group">
				<span className="h3">&nbsp;{props.number}&nbsp;</span>
			</div>
			<div className="form-group">
				<button className="btn btn-success" onClick={ () => props.drinkUpdater(props.id, {number: props.number + 1}) }>+</button>
				<button className="btn btn-warning" onClick={ () => props.drinkUpdater(props.id, {number: props.number - 1}) }>-</button>
			</div>
			<select className="form-control form-group" value={props.alcoholType} onChange={ drinkUpdater }>
				{props.drinkTypes.map(
					(drink, index) => (
						<option value={index} key={`${props.id}.${index}`}>{`${drink.type} (${drink.shot}ml, ${drink.proof}%)`}</option>
					)
				)}
			</select>
			<div className="form-group">
				<label className="form-control lower-2px-hack">Volume&nbsp;
					<input className="higher-2px-hack" type="number" min={0}
						value={props.shot} 
						onChange={(e) => { props.drinkUpdater(props.id, {shot: e.target.value}) }}/> 
				</label>
				<label className="form-control lower-2px-hack">Alc. by volume&nbsp;
					<input className="higher-2px-hack" type="number" min={0} max={100}
						value={props.proof} 
						onChange={(e) => { props.drinkUpdater(props.id, {proof: e.target.value}) }}/> 
				</label>
			</div>
			<button className="btn btn-danger"
				onClick={ (e) => props.clickHandler(props.id) }>
				Delete
			</button>
		</div> 
	)
}

export default OneDrink
