import {WeatherActionTypes} from "./weather.actionTypes";

export class WeatherActions {

    getWeatherReq(payload) {
        return ({type: WeatherActionTypes.GET_WEATHER_REQ, payload});
    }
    
    getWeatherRes(payload) {
        return ({type: WeatherActionTypes.GET_WEATHER_RES, payload});
    }
}

export const weatherActions = new WeatherActions();