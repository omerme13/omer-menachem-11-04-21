import { ofType } from "redux-observable";
import { mergeMap, pluck } from "rxjs/operators";
import { weatherActions } from "../weather/weather.actions";
import { coreActions } from "./core.actions";
import { CoreActionTypes } from "./core.actionTypes";
import { coreSelector } from "./core.selector";

export class CoreEffects {
	constructor(coreActions, coreSelector) {
        this.coreActions = coreActions;
    }

	onInitApp(action$) {
		return action$.pipe(
			ofType(CoreActionTypes.INIT_APP),
			mergeMap(() => [
				weatherActions.getWeatherReq(),
				weatherActions.getWeather5DaysReq(),
			])
		);
	}

	onSelectedFavorite(action$) {
		return action$.pipe(
			ofType(CoreActionTypes.ON_SELECTED_FAVORITE),
			pluck("payload"),
			mergeMap((forecast) => [
				weatherActions.getWeatherReq(forecast.key),
				weatherActions.getWeather5DaysReq(forecast.key),
				weatherActions.updateLocation({
					LocalizedName: forecast.city,
					Country: {
                        LocalizedName: forecast.country
                    },
					Key: forecast.key
				}),
                this.coreActions.goToPage('Home')
			])
		);
	}

	allEffects = [
        this.onInitApp.bind(this),
        this.onSelectedFavorite.bind(this),
    ];
}

export const coreEffects = new CoreEffects(coreActions, coreSelector);
