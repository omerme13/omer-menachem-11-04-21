import { ofType } from "redux-observable";
import { map, mergeMap, pluck, withLatestFrom } from "rxjs/operators";
import { coreActions } from '../core/core.actions';
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
            mergeMap(res => [
                res instanceof Error
                    ? coreActions.toggleToast({msg: 'Could not get current weather', isOpen: true, type: 'error'})
                    : this.weatherActions.getWeatherRes(res)
            ])
        )
    }

    onGetWeather5Days(action$, state) {
        return action$.pipe(
            ofType(WeatherActionTypes.GET_WEATHER_5_DAYS_REQ),
            pluck('payload'),
            withLatestFrom(state),
            mergeMap(([locationKey, state]) => {
                const {key} = this.weatherSelector.getLocation(state);
                return weatherService.getWeather5Days(locationKey || key);
            }),
            mergeMap(res => [
                res instanceof Error
                    ? coreActions.toggleToast({msg: 'Could not get daily forecast', isOpen: true, type: 'error'})
                    : this.weatherActions.getWeather5DaysRes(res)
            ])
        )
    }
    
    onGetWeatherLocations(action$) {
        return action$.pipe(
            ofType(WeatherActionTypes.GET_WEATHER_LOCATIONS_REQ),
            pluck('payload'),
            mergeMap(searchText => weatherService.getWeatherLocations(searchText)),
            mergeMap(res => [
                res instanceof Error
                    ? coreActions.toggleToast({msg: 'Could not get locations', isOpen: true, type: 'error'})
                    : this.weatherActions.getWeatherLocationsRes(res)
            ])
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

    onSelectFavorite(action$) {
		return action$.pipe(
			ofType(WeatherActionTypes.SELECT_FAVORITE),
			pluck("payload"),
			mergeMap((forecast) => [
				this.weatherActions.getWeatherReq(forecast.key),
				this.weatherActions.getWeather5DaysReq(forecast.key),
				this.weatherActions.updateLocation({
					LocalizedName: forecast.city,
					Country: {
                        LocalizedName: forecast.country
                    },
					Key: forecast.key
				}),
                coreActions.goToPage('Home')
			])
		);
	}

    onAddRemoveFavorite(action$, state) {
        return action$.pipe(
            ofType(WeatherActionTypes.ADD_REMOVE_FAVORITE),
            pluck('payload'),
            map(({isAddToFavorites}) => (
                coreActions.toggleToast({
                    msg: `${isAddToFavorites ? 'Added to' : 'Removed from'} favorites`,
                    isOpen: true,
                    type: 'success'
                })
            ))
        )
    }
    
    allEffects = [
        this.onGetWeather.bind(this),
        this.onGetWeather5Days.bind(this),
        this.onGetWeatherLocations.bind(this),
        this.onSetSelectedLocation.bind(this),
        this.onSelectFavorite.bind(this),
        this.onAddRemoveFavorite.bind(this),
    ]
}

export const weatherEffects = new WeatherEffects(
    weatherActions, weatherSelector
);
