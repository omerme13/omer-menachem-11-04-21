import {createSelector} from 'reselect';

export class WeatherSelector {
    getTempSelector = (state) => state.weather.temp; 
    getUsersSelector = (state) => state.weather.users; 
    // getTempSelector = createSelector(

    // )

}


export const weatherSelector = new WeatherSelector();