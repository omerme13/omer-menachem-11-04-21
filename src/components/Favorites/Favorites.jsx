import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { weatherSelector } from '../../store/weather/weather.selector';
import './Favorites.scss';
import { coreSelector } from "../../store/core/core.selector";
import {weatherActions} from '../../store/weather/weather.actions'

const Favorites = () => {
	const dispatch = useDispatch();
	const favorites = useSelector(weatherSelector.getFavoritesAsArray);
	const {tempUnit} = useSelector(coreSelector.getUserPreference);


    const handleClick = (forecast) => {
		dispatch(weatherActions.selectFavorite(forecast));
    };

	return (
		<div className="favorites">
			<div className="cards-container">
				{favorites.map((forecast, i) => (
					<Card key={`forecast-${i}`} onClick={() => handleClick(forecast)}>
						<CardHeader
							title={forecast.city}
						/>
						<CardContent>
							<strong>
								{tempUnit === 'c'
									? `${forecast.tempC}°C`
									: `${forecast.tempF}°F`
							}
							</strong>
							<br />
							<br />
							<div className="card-weather-text">
								{forecast.weatherText}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Favorites;
