import {combineReducers} from 'redux';
import { CoreReducer, coreReducerKey } from '../core/core.reducer';
import { WeatherReducer, weatherReducerKey } from '../weather/weather.reducer';

export const RootReducer = combineReducers({
    [coreReducerKey]: CoreReducer,
    [weatherReducerKey]: WeatherReducer,
});