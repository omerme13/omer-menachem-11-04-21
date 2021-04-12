import {WeatherActionTypes} from "./weather.actionTypes";

export class WeatherActions {

    getWeatherReq(payload) {
        return ({type: WeatherActionTypes.GET_WEATHER_REQ, payload});
    }
    
    getWeatherRes(payload) {
        return ({type: WeatherActionTypes.GET_WEATHER_RES, payload});
    }

    getWeather5DaysReq(payload) {
        return ({type: WeatherActionTypes.GET_WEATHER_5_DAYS_REQ, payload});
    }
    
    getWeather5DaysRes(payload) {
        return ({type: WeatherActionTypes.GET_WEATHER_5_DAYS_RES, payload});
    }
}

export const weatherActions = new WeatherActions();