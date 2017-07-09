import React from "react";
import Title from "./title";
import BodyConfig from "./bodyconfig";
import OneDrink from "./onedrink";
import Results from "./results";
import { render } from "react-dom";
import createClass from "create-react-class";

const ethanolDensity = 0.789,
		genderCoefficient = { "male": 5/3, "female": 10/7 };

const drinkTypes = [
	{type: "Vodka", shot: 40, proof: 45},
	{type: "Beer", shot: 500, proof: 7},
	{type: "Wine", shot: 100, proof: 12},
	{type: "Whisky, Gin, Tequila", shot: 40, proof: 40},
	{type: "Liqueur", shot: 40, proof: 18 },
	{type: "Dwarven Spirit", shot: 40, proof: 100 }	
];

class Drink {
	constructor(id) {
		Object.assign(this, drinkTypes[0]);
		this.id = id;
		this.number = 1;
		this.alcoholType = 0;
		this.recount()
		}
	recount() {
		this.number = Math.max(this.number, 0);
		this.alcohol = Math.ceil(ethanolDensity * this.number * this.shot * this.proof / 100);			
		return this;
	}
}

const App = createClass({
	getInitialState: function() {
		return {
			gender: "male",
			weight: "75",
			idCount: 0,
			drinks: []
		}
	},
	getNewId: function() {
		return this.state.idCount++;
	},
	addRow: function(e) {
		var newDrink = (new Drink(this.getNewId())).recount();
		this.setState({
			drinks: this.state.drinks.concat([ newDrink ])
		});
	},
	deleteRow: function(id) {
		var drinksArr = this.state.drinks.filter(
			drink => drink.id !== id
		);
		this.setState({drinks: drinksArr});
	},	
	handleWeightChange: function(e) {
		this.setState({weight: e.target.value})
	},
	handleSexChange: function(e) {
		this.setState({gender: e.target.value});
	},
	drinkUpdater: function(key, newValues) {
		var updatedDrink = this.state.drinks.find( drink => drink.id === key );
		Object.assign(updatedDrink, newValues);
		updatedDrink.recount();
		var drinkArr = this.state.drinks.map(
			drink => (drink.id===key) ? updatedDrink : drink
		);
		this.setState({ 
			drinks: drinkArr
		});				
	},
	countAlcohol: function() {
		return this.state.drinks.reduce(
			(acc, drink) => acc + drink.alcohol, 
			0
		)
	},
	render: function() {
		return (
			<div>
				<Title />
				<BodyConfig 
					handleSexChange={this.handleSexChange}
					handleWeightChange={this.handleWeightChange}
					addRow={this.addRow}
					weight={this.state.weight}
					gender={this.state.gender}
				/>
				{
					this.state.drinks.map(
						drink => <OneDrink 
							drinkTypes={drinkTypes}
							key={drink.id} 
							{...drink}
							clickHandler={this.deleteRow}
							drinkUpdater={this.drinkUpdater}
							/>
					)
				}
				<Results 
					alcohol={ this.countAlcohol() }
					genderCoefficient={ genderCoefficient[this.state.gender] }
					bodyMass={ this.state.weight }
				/>
			</div>			
		)
	}
});

render(<App />, document.querySelector("#app"));
