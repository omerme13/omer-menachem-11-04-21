import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { coreActions } from "../../store/core/core.actions";
import { weatherSelector } from '../../store/weather/weather.selector';
import './Favorites.scss';

const Favorites = () => {
	const dispatch = useDispatch();
	const favorites = useSelector(weatherSelector.getFavoritesAsArray);

    const handleClick = (forecast) => {
		dispatch(coreActions.selectedFavorite(forecast));
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
								{forecast.tempC}{forecast.tempC && '°'}
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
