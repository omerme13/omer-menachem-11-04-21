import { CardContent, CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherSelector } from "../../store/weather/weather.selector";
import "./CardsContainer.scss";

const CardsContainer = () => {
	const dispatch = useDispatch();
	// const users = useSelector(weatherSelector.getUsersSelector);

	const users = [
		{id: 1, name: 'omer', email: 'email@gmail.com'},
		{id: 1, name: 'omer', email: 'email@gmail.com'},
		{id: 1, name: 'omer', email: 'email@gmail.com'},
		{id: 1, name: 'omer', email: 'email@gmail.com'},
		{id: 1, name: 'omer', email: 'email@gmail.com'},
	]
	const handleClick = () => {};

	return (
		<div className="cards-container" onClick={handleClick}>
			{users.map((user) => (
				<Card key={`user-${user.id}`}>
                    <CardHeader title={user.name} />
					<CardContent>{user.email}</CardContent>
				</Card>
			))}
		</div>
	);
};

export default CardsContainer;
