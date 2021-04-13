import { WeatherActionTypes } from "./weather.actionTypes";
import { weatherInitialState } from "./weather.initState";
import { utils } from "../../utils";

export const weatherReducerKey = "weather";

export function WeatherReducer(state = weatherInitialState, action) {
	switch (action.type) {
		case WeatherActionTypes.GET_WEATHER_RES: {
			const {
				Temperature,
				WeatherIcon,
				WeatherText,
			} = action.payload.data[0];

			return {
				...state,
				today: {
					...state.today,
					tempC: Math.round(Temperature.Metric.Value),
					tempF: Temperature.Imperial.Value,
					weatherIcon: WeatherIcon,
					weatherText: WeatherText,
				}
			};
		}

		case WeatherActionTypes.GET_WEATHER_5_DAYS_RES: {
			const { DailyForecasts } = action.payload.data;

			const dailyForecasts = DailyForecasts.map((forecast) => ({
				tempF: {
					min: forecast.Temperature.Minimum.Value,
					max: forecast.Temperature.Maximum.Value,
				},
				tempC: {
					min: utils.convertFToC(forecast.Temperature.Minimum.Value),
					max: utils.convertFToC(forecast.Temperature.Maximum.Value),
				},
				weatherIcon: forecast.Day.Icon,
				weatherText: forecast.Day.IconPhrase,
			}));

			return {
				...state,
				dailyForecasts,
			};
		}

		case WeatherActionTypes.UPDATE_LOCATION: {
			const {LocalizedName, Country, Key} = action.payload;
			console.log(action.payload);
            return {
                ...state,
				location: {
					city: LocalizedName,
					country: Country.LocalizedName,
					key: Key
				}
            }
		}
			
		case WeatherActionTypes.ADD_REMOVE_FAVORITE: {
			const {key} = action.payload;
			
			return {
				...state,
				favorites: {
					...state.favorites,
					[key]: state.favorites[key] ? undefined : action.payload
				}
			}
		}


		case WeatherActionTypes.GET_WEATHER_LOCATIONS_RES: {
			return {
				...state,
				citiesFoundBySearch: action.payload.data || []
			}
		}
		default:
			return state;
	}
}
