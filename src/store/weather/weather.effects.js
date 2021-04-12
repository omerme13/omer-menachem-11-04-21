import { ofType } from "redux-observable";
import { pluck, tap, map, mergeMap } from "rxjs/operators";
import {
    weatherActions
} from "./weather.actions";
import { WeatherActionTypes } from "./weather.actionTypes";
import { weatherSelector } from "./weather.selector";
import { weatherService } from "./weather.service";


export class WeatherEffects {
    constructor(weatherActions, weatherSelector) {
    }

    onGetWeather(action$) {
        return action$.pipe(
            ofType(WeatherActionTypes.GET_WEATHER_REQ),
            pluck('payload'),
            mergeMap((locationKey) => weatherService.getWeather(locationKey)),
            map(res => weatherActions.getWeatherRes(res))
        )
    }

  

    allEffects = [
        this.onGetWeather.bind(this),
    ]
}

export const weatherEffects = new WeatherEffects(
    weatherActions, weatherSelector
);
