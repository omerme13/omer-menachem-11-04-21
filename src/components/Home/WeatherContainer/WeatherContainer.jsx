import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../../../store/weather/weather.actions";
import { weatherSelector } from "../../../store/weather/weather.selector";
import CardsContainer from "../../CardsContainer/CardsContainer";
import "./WeatherContainer.scss";

const WeatherContainer = () => {
	const dispatch = useDispatch();

	const location = useSelector(weatherSelector.getLocation);
	const { tempC, weatherText } = useSelector(weatherSelector.getTodayWeather);
	const isFavoriteLocation = useSelector(weatherSelector.getIsFavorite);
	
	const handleToggleFavorite = () => {
		dispatch(
			weatherActions.addRemoveFavorite({
				...location,
				tempC,
				weatherText,
			})
		);
	};

	return (
		<div className="weather-container">
			<div className="weather-container__top">
				<div className="weather-container__today">
					<div className="weather-container__location">
						{`${location.city}, ${location.country}`}
					</div>
					<div className="weather-container__degrees">{tempC}&deg;</div>
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
