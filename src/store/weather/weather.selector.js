import { createSelector } from 'reselect';

export class WeatherSelector {
    getFavorites = state => state.weather.favorites; 
    getFavoritesAsArray = state => Object.values(state.weather.favorites).filter(val => val); 

    getTodayWeather = state => state.weather.today;
    
    getLocation = state => state.weather.location;

    getDailyForecast = state => state.weather.dailyForecasts;

    getCities = state => state.weather.citiesFoundBySearch;

    getIsFavorite = createSelector(
        this.getLocation,
        this.getFavorites,
        (location, favorites) => !!favorites[location.key]
    )
}


export const weatherSelector = new WeatherSelector();