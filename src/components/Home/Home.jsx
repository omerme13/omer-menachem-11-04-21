import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../../store/weather/weather.actions';
import { weatherSelector } from '../../store/weather/weather.selector';
import "./Home.scss";
import WeatherContainer from "./WeatherContainer/WeatherContainer";


const Home = () => {
    const options = useSelector(weatherSelector.getCities);
    const dispatch = useDispatch();

    const onSelectHandler = e => {
        const selectedCity = options.find(opt => opt.LocalizedName === e.target.value);

        if (!selectedCity) {
            return;
        }
        
        dispatch(weatherActions.setSelectedLocation(selectedCity));
    }

    const onChangeHandler = e => {
        dispatch(weatherActions.getWeatherLocationsReq(e.target.value));
    }

    return (
        <div className="home">
            <Autocomplete
                options={options.map(option => option.LocalizedName)}
                onSelect={onSelectHandler}
                onInputChange={onChangeHandler}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="search city"
                        margin="normal"
                        variant="outlined"
                    />
                )}
            />
            <WeatherContainer />
        </div>
    );
};

export default Home;
