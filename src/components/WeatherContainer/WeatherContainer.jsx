import React from "react";
import { useDispatch } from "react-redux";
import CardsContainer from '../CardsContainer/CardsContainer';
import "./WeatherContainer.scss";

const WeatherContainer = () => {
	const dispatch = useDispatch();


	return (
		<div className="weather-container">
			<CardsContainer />
		</div>
	);
};

export default WeatherContainer;
