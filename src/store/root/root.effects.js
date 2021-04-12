import { combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";
import { coreEffects } from "../core/core.effects";
import { weatherEffects } from "../weather/weather.effects";

export const rootEffects = (action$, store$, dependencies) =>
	combineEpics(...coreEffects.allEffects, ...weatherEffects.allEffects)(
		action$,
		store$,
		dependencies
	).pipe(catchError((error, source) => source));
