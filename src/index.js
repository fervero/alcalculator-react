import React from "react";
import Title from "./title";
import BodyConfig from "./bodyconfig";
import OneDrink from "./onedrink";
import Results from "./results";
import { render } from "react-dom";

const drinkTypes = [
	{type: "vodka", shot: 40, proof: 45},
	{type: "beer", shot: 500, proof: 7}
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: "male",
			weight: "75",
			idCount: 0,
			drinks: []
		}

/* Sad comment on the code below: why the React dev team would fuck up the ES6 classes binding,
	and then insist that we use the ES6 class syntax? Why?... */

		this.handleWeightChange = this.handleWeightChange.bind(this);
		this.handleSexChange = this.handleSexChange.bind(this);
		this.saySex = this.saySex.bind(this);
		this.kliker = this.kliker.bind(this);
		this.addRow = this.addRow.bind(this);
		this.numberUpdater = this.numberUpdater.bind(this);
		this.getNewId = this.getNewId.bind(this);
		this.drinkChangeHandler = this.drinkChangeHandler.bind(this);
		this.countAlcohol = this.countAlcohol.bind(this);
	}
	getNewId() {
		return this.state.idCount++;
	}
	handleWeightChange(e) {
		this.setState({weight: e.target.value})
	}
	handleSexChange(e) {
		this.setState({gender: e.target.value});
	}
	saySex(e) {
		console.log(this.state.gender);
		console.log(this.state.weight);		
	}
	addRow() {
		var newDrink = {
			name: this.getNewId(),
			number: 0,
			alcohol: 0,
			alcoholType: 0
		}
		this.setState({
			drinks: this.state.drinks.concat([ newDrink ])
		});
	}
	recountDrink(drink) {
		drink.alcohol = Math.round(drink.number * 
			drinkTypes[drink.alcoholType].shot *
			drinkTypes[drink.alcoholType].proof / 100);
		return drink
	}
	numberUpdater(key, number) {
		var updatedDrink = this.state.drinks.find( drink => drink.name === key );
		updatedDrink.number = number;
		updatedDrink = this.recountDrink(updatedDrink);
		var drinkArr = this.state.drinks.map(
			drink => (drink.name===key) ? updatedDrink : drink
		);
		this.setState({ 
			drinks: drinkArr
		})
	}
	kliker(key) {
		var drink = this.state.drinks[key];
		console.log(drink);
	}
	drinkChangeHandler(key, type) {
		var updatedDrink = this.state.drinks.find( drink => drink.name === key );
		updatedDrink.alcoholType = type;
		updatedDrink = this.recountDrink(updatedDrink);
		var drinkArr = this.state.drinks.map(
			drink => (drink.name===key) ? updatedDrink : drink
		)
		this.setState({ 
			drinks: drinkArr
		})
	}
	countAlcohol() {
		return this.state.drinks.reduce(
			(acc, drink) => acc + drink.alcohol, 
			0
		)
	}
	render() {
		return (
			<div>
				<Title />
				<BodyConfig 
					handleSexChange={this.handleSexChange}
					handleWeightChange={this.handleWeightChange}
					saySex={this.addRow}
					weight={this.state.weight}
					gender={this.state.gender}
				/>
				{
					this.state.drinks.map(
						drink => <OneDrink 
							drinkTypes={drinkTypes}
							key={drink.name} 
							id={drink.name}
							number={drink.number}
							alcohol={drink.alcohol}
							clickHandler={this.kliker}
							numberUpdater={this.numberUpdater}
							drinkChangeHandler={this.drinkChangeHandler}
							/>
					)
				}
				<Results alcohol={this.countAlcohol()}/>
			</div>			
		)
	}
}

render(<App />, document.querySelector("#app"));
