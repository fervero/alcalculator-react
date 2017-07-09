import React from "react";

function OneDrink(props) {
	const drinkUpdater = (e) => props.drinkUpdater(
			props.id, 
			Object.assign(
				{alcoholType: e.target.value}, 
				props.drinkTypes[e.target.value]) 
			);
	return (
		<div>
			<h2>{props.drinkTypes[props.alcoholType].type}</h2>
		<select value={props.alcoholType} onChange={ drinkUpdater }>
			{props.drinkTypes.map(
				(drink, index) => (
					<option value={index} key={`${props.id}.${index}`}>{`${drink.type} (${drink.shot}ml, ${drink.proof}%)`}</option>
				)
			)}
		</select>
		<label> vol 
			<input type="number" 
				min={0}
				value={props.shot} 
				onChange={(e) => { props.drinkUpdater(props.id, {shot: e.target.value}) }}/> 
		</label>
		<label> proof
			<input type="number" 
				min={0}
				max={100}
				value={props.proof} 
				onChange={(e) => { props.drinkUpdater(props.id, {proof: e.target.value}) }}/> 
		</label>
		<button onClick={ () => props.drinkUpdater(props.id, {number: props.number + 1}) }>+</button>
		<button onClick={ () => props.drinkUpdater(props.id, {number: props.number - 1}) }>-</button>
		<button 
			onClick={ (e) => props.clickHandler(props.id) }>
			Delete
		</button>
		<span> {props.number}</span>
		<br />
		<span> {props.alcohol}</span>
		</div> 
	)
}

export default OneDrink
