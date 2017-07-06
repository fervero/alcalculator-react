import React from "react";

class DrinkSelect extends React.Component {
	render() {
		return (
			<select>
				{this.props.drinks.map(
					function(drink, index) {
						return <option value={index} key={index}>{drink.type}</option>
					}
				)}
			</select>
		)
	}
}

export default DrinkSelect;
