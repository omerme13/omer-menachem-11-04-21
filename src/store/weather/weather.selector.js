import {createSelector} from 'reselect';

export class WeatherSelector {
    getTempSelector = (state) => state.weather.temp; 
    getUsersSelector = (state) => state.weather.users; 
    // getTempSelector = createSelector(

    // )

    getTodayWeather = state => state.weather.data.data.data[0];
    getCity = state => state.weather.city;
    getCountry = state => state.weather.country;

}


export const weatherSelector = new WeatherSelector();