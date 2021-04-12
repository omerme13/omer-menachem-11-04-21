import { WeatherActionTypes } from "./weather.actionTypes";
import { weatherInitialState } from "./weather.initState";

export const weatherReducerKey = 'weather';

export function WeatherReducer(state = weatherInitialState, action) {
    switch (action.type) {
        case WeatherActionTypes.GET_WEATHER_RES:
            return {
                ...state,
                data: action.payload
            }

        default: return state;
    }
}