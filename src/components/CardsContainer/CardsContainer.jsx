import { CardContent, CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherSelector } from "../../store/weather/weather.selector";
import "./CardsContainer.scss";

const CardsContainer = () => {
	const dailyForecast = useSelector(weatherSelector.getDailyForecast);

	const handleClick = () => {};

	return (
		<div className="cards-container" onClick={handleClick}>
			{dailyForecast.map((forecast, i) => (
				<Card key={`forecast-${i}`}>
                    <CardHeader title={forecast.tempC.min} />
					<CardContent>{forecast.tempC.max}</CardContent>
				</Card>
			))}
		</div>
	);
};

export default CardsContainer;
