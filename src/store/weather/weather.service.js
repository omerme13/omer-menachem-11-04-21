import { axiosReq } from "../AxiosReq";

export class WeatherService {
	getWeather = locationKey => (
		axiosReq.get(
			`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
			{ apikey: process.env.REACT_APP_API_KEY }
		)
	)

	getWeather5Days = locationKey => (
		axiosReq.get(
			`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
			{ apikey: process.env.REACT_APP_API_KEY }
		)
	);

	getWeatherLocations = q => (
		axiosReq.get(
			'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',
			{ apikey: process.env.REACT_APP_API_KEY,q }
		)
	)
}

export const weatherService = new WeatherService();
