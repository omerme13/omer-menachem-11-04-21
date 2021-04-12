import { WeatherActionTypes } from "./weather.actionTypes";
import { weatherInitialState } from "./weather.initState";
import { utils } from '../../utils';

export const weatherReducerKey = 'weather';

export function WeatherReducer(state = weatherInitialState, action) {
    switch (action.type) {
        case WeatherActionTypes.GET_WEATHER_RES:
            const {Temperature, WeatherIcon, WeatherText} = action.payload.data[0];

            return {
                ...state,
                tempC: Temperature.Metric.Value,
                tempF: Temperature.Imperial.Value,
                weatherIcon: WeatherIcon,
                weatherText: WeatherText
            }

            case WeatherActionTypes.GET_WEATHER_5_DAYS_RES:
                const {DailyForecasts} = action.payload.data;

                const dailyForecasts = DailyForecasts.map(forecast => ({
                    tempF: {
                        min: forecast.Temperature.Minimum.Value,
                        max: forecast.Temperature.Maximum.Value,
                    },
                    tempC: {
                        min: utils.convertFToC(forecast.Temperature.Minimum.Value),
                        max: utils.convertFToC(forecast.Temperature.Maximum.Value),
                    },
                    weatherIcon: forecast.Day.Icon,
                    weatherText: forecast.Day.IconPhrase
                }))
    
                return {
                    ...state,
                    dailyForecasts
                }

        default: return state;
    }
}