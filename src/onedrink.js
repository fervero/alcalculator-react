import React from "react";

function OneDrink(props) {
	const clickHandler = function(e) {
		props.clickHandler(props.id, props.number)
	}
	const plusHandler = function(e) {
		props.numberUpdater(props.id, props.number + 1)
	}
	const minusHandler = function(e) {
		if (props.number > 0) {
			props.numberUpdater(props.id, props.number - 1)
		}
	}
	const drinkChangeHandler = function(e) {
		props.drinkChangeHandler(props.id, e.target.value)
	}

	return (
		<div>
			<h2>A drink</h2>
		<select onChange={drinkChangeHandler}>
			{props.drinkTypes.map(
				(drink, index) => (
					<option value={index} key={`${props.id}.${index}`}>{drink.type}</option>
				)
			)}
		</select>				
			<button onClick={ plusHandler }>+</button>
			<button onClick={ minusHandler }>-</button>
			<button 
				onClick={ clickHandler }>
				Reveal
			</button>
			<span> {props.number}</span>
			<br />
			<span> {props.alcohol}</span>
		</div> 
	)
	
}

export default OneDrink
