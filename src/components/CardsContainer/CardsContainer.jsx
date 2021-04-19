import { CardContent, CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React from "react";
import { useSelector } from "react-redux";
import { coreSelector } from "../../store/core/core.selector";
import { weatherSelector } from "../../store/weather/weather.selector";
import { utils } from "../../utils";
import "./CardsContainer.scss";

const CardsContainer = () => {
	const dailyForecast = useSelector(weatherSelector.getDailyForecast);
	const {tempUnit} = useSelector(coreSelector.getUserPreference);
	const handleClick = () => {};

	return (
		<div className="cards-container" onClick={handleClick}>
			{dailyForecast.map((forecast, i) => (
				<Card key={`forecast-${i}`}>
                    <CardHeader 
						title={utils.convertDayToString(((new Date().getDay() + 1 + i)) % 7)} 
					/>
					<CardContent>
						<strong>
							{tempUnit === 'c'
								? `${forecast.tempC.min}°C/${forecast.tempC.max}°C`
								: `${forecast.tempF.min}°F/${forecast.tempF.max}°F`
							}
						</strong>
						<br /><br />
						<div className="card-weather-text">{forecast.weatherText}</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default CardsContainer;