import Axios from "axios";

export class WeatherService {
	getWeather = locationKey => {
        const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;

		return Axios.get(url, {
			params: {
				apikey: "4kfYq2zbJgLGJ9vyYa3FfuFLU7RdXL0b"
			},
		})
		.catch(err => {
			throw(err)
		})
	};

	getWeather5Days = locationKey => {
        const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`;

		return Axios.get(url, {
			params: {
				apikey: "4kfYq2zbJgLGJ9vyYa3FfuFLU7RdXL0b"
			},
		})
		.catch(err => {
			throw(err)
		})
	};

	getWeatherLocations = q => {
		const url = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';

		return Axios.get(url, {
			params: {
				apikey: "4kfYq2zbJgLGJ9vyYa3FfuFLU7RdXL0b",
				q
			},
		})
		.catch(err => {
			throw(err)
		})
	};
}

export const weatherService = new WeatherService();
