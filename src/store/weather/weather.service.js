import Axios from "axios";

export class WeatherService {
	constructor() {}

	getWeather = (locationKey) => {
        // const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
        const url = '/weather.json';

		return Axios.get(url, {
			params: {
				// apikey: "4kfYq2zbJgLGJ9vyYa3FfuFLU7RdXL0b"
			},
		});
	};

	getWeather5Days = (locationKey) => {
        // const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`;
        const url = '/weather5Days.json';

		return Axios.get(url, {
			params: {
				// apikey: "4kfYq2zbJgLGJ9vyYa3FfuFLU7RdXL0b"
			},
		});
	};
}

export const weatherService = new WeatherService();
