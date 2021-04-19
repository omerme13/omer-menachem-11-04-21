import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { coreSelector } from "../../../store/core/core.selector";
import { weatherActions } from "../../../store/weather/weather.actions";
import { weatherSelector } from "../../../store/weather/weather.selector";
import CardsContainer from "../../CardsContainer/CardsContainer";
import "./WeatherContainer.scss";

const WeatherContainer = () => {
	const dispatch = useDispatch();

	const {tempUnit} = useSelector(coreSelector.getUserPreference);
	const location = useSelector(weatherSelector.getLocation);
	const { tempC, weatherText, tempF } = useSelector(weatherSelector.getTodayWeather);
	const isFavoriteLocation = useSelector(weatherSelector.getIsFavorite);
	
	const handleToggleFavorite = () => {
		dispatch(
			weatherActions.addRemoveFavorite({
				...location,
				tempC,
				tempF,
				weatherText,
				isAddToFavorites: isFavoriteLocation ? false : true
			})
		);
	};

	const degToDisplay = tempUnit === 'c'
		? `${tempC}${tempC && '°C'}`
		: `${tempF}${tempF && '°F'}`;

	return (
		<div className="weather-container">
			<div className="weather-container__top">
				<div className="weather-container__today">
					<div className="weather-container__location">
						{`${location.city}, ${location.country}`}
					</div>
					<div className="weather-container__degrees">{degToDisplay}</div>
				</div>
				<FavoriteIcon
					className={`favorite-icon ${
						isFavoriteLocation && "favorite-icon--full"
					}`}
					onClick={handleToggleFavorite}
				/>
			</div>
			<div className="weather-container__condition">{weatherText}</div>
			<CardsContainer />
		</div>
	);
};

export default WeatherContainer;
