import { CardContent, CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React from "react";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/weather/weather.selector";
import { utils } from "../../utils";
import "./CardsContainer.scss";

const CardsContainer = () => {
	const dailyForecast = useSelector(weatherSelector.getDailyForecast);

	const handleClick = () => {};

	return (
		<div className="cards-container" onClick={handleClick}>
			{dailyForecast.map((forecast, i) => (
				<Card key={`forecast-${i}`}>
                    <CardHeader 
						title={utils.convertDayToString(((new Date().getDay() + 1 + i)) % 7)} 
					/>
					<CardContent>
						<strong>{forecast.tempC.min}°/{forecast.tempC.max}°</strong>
						<br /><br />
						<div className="card-weather-text">{forecast.weatherText}</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default CardsContainer;