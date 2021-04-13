import { ofType } from "redux-observable";
import { catchError, map, mergeMap, pluck, withLatestFrom } from "rxjs/operators";
import {
    weatherActions
} from "./weather.actions";
import { WeatherActionTypes } from "./weather.actionTypes";
import { weatherSelector } from "./weather.selector";
import { weatherService } from "./weather.service";


export class WeatherEffects {
    constructor(weatherActions, weatherSelector) {
        this.weatherActions = weatherActions;
        this.weatherSelector = weatherSelector;
    }

    onGetWeather(action$, state) {
        return action$.pipe(
            ofType(WeatherActionTypes.GET_WEATHER_REQ),
            pluck('payload'),
            withLatestFrom(state),
            mergeMap(([locationKey, state]) => {
                const {key} = this.weatherSelector.getLocation(state);
                return weatherService.getWeather(locationKey || key);
            }),
            catchError(err => console.log(err)),
            map(res => this.weatherActions.getWeatherRes(res)),
        )
    }

    onGetWeather5Days(action$) {
        return action$.pipe(
            ofType(WeatherActionTypes.GET_WEATHER_5_DAYS_REQ),
            pluck('payload'),
            mergeMap(locationKey => weatherService.getWeather5Days(locationKey)),
            catchError(err => console.log(err)),
            map(res => this.weatherActions.getWeather5DaysRes(res))
        )
    }
    
    onGetWeatherLocations(action$) {
        return action$.pipe(
            ofType(WeatherActionTypes.GET_WEATHER_LOCATIONS_REQ),
            pluck('payload'),
            mergeMap(searchText => weatherService.getWeatherLocations(searchText)),
            catchError(err => console.log(err)),
            map(res => this.weatherActions.getWeatherLocationsRes(res))
        )
    }
    
    onSetSelectedLocation(action$) {
        return action$.pipe(
            ofType(WeatherActionTypes.SET_SELECTED_LOCATION),
            pluck('payload'),
            mergeMap(location => [
                this.weatherActions.getWeatherReq(location.Key),
                this.weatherActions.getWeather5DaysReq(location.Key),
                this.weatherActions.updateLocation(location),
            ])
        )
    }

    allEffects = [
        this.onGetWeather.bind(this),
        this.onGetWeather5Days.bind(this),
        this.onGetWeatherLocations.bind(this),
        this.onSetSelectedLocation.bind(this),
    ]
}

export const weatherEffects = new WeatherEffects(
    weatherActions, weatherSelector
);
