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

    getWeatherLocationsReq(payload) {
        return ({type: WeatherActionTypes.GET_WEATHER_LOCATIONS_REQ, payload});
    }

    getWeatherLocationsRes(payload) {
        return ({type: WeatherActionTypes.GET_WEATHER_LOCATIONS_RES, payload});
    }

    updateLocation(payload) {
        return ({type: WeatherActionTypes.UPDATE_LOCATION, payload});
    }
    
    setSelectedLocation(payload) {
        return ({type: WeatherActionTypes.SET_SELECTED_LOCATION, payload});
    }
    
    addRemoveFavorite(payload) {
        return ({type: WeatherActionTypes.ADD_REMOVE_FAVORITE, payload});
    }
}

export const weatherActions = new WeatherActions();