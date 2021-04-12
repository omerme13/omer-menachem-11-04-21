import {createSelector} from 'reselect';

export class WeatherSelector {
    getTempSelector = (state) => state.weather.temp; 
    getUsersSelector = (state) => state.weather.users; 
    // getTempSelector = createSelector(

    // )

    getTodayWeather = state => {
        const {tempC, weatherText} = state.weather;

        return {tempC, weatherText};
    }
    
    getCity = state => state.weather.city;
    getCountry = state => state.weather.country;
    getDailyForecast = state => state.weather.dailyForecasts;

}


export const weatherSelector = new WeatherSelector();