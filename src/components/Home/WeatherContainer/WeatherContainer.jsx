import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardsContainer from '../../CardsContainer/CardsContainer';
import "./WeatherContainer.scss";
import Today from '../Today/Today';
import {weatherSelector} from '../../../store/weather/weather.selector'

const WeatherContainer = () => {
	const dispatch = useDispatch();
	const weatherToday = useSelector(weatherSelector.getTodayWeather);
	const city = useSelector(weatherSelector.getCity);
	const country = useSelector(weatherSelector.getCountry);

	console.log(weatherToday);
	const {Temperature, WeatherText} = useSelector(weatherSelector.getTodayWeather);


	return (
		<div className="weather-container">
			<div className="weather-container__top">
				<Today city={city} country={country} deg={Temperature.Metric.Value} />
				<FavoriteIcon className="favorite-icon" />
			</div>
			<div className="weather-container__condition">
				{WeatherText}
			</div>
			<CardsContainer />
		</div>
	);
};

export default WeatherContainer;
