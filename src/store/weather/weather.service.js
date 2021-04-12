import Axios from "axios";

export class WeatherService {
	constructor() {}

	getWeather = (locationKey) => {
        // const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
        const url = '/weather.json';

		return Axios.get(url, {
			// params: {
			// 	// apikey: "4kfYq2zbJgLGJ9vyYa3FfuFLU7RdXL0b"
			// },
		});
	};
}

export const weatherService = new WeatherService();
