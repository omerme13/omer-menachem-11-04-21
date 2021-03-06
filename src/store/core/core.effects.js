import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
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



	allEffects = [
        this.onInitApp.bind(this),
    ];
}

export const coreEffects = new CoreEffects(coreActions, coreSelector);
