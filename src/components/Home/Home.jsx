import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./Home.scss";
import WeatherContainer from "./WeatherContainer/WeatherContainer";
import { TextField } from "@material-ui/core";

const options = [
    { city: "Tel Aviv", Country: "Israel" },
    { city: "Haifa", Country: "Israel" },
];
const Home = () => {
    const options = [
        { city: "Tel Aviv", Country: "Israel" },
        { city: "Haifa", Country: "Israel" },
    ];

    return (
        <div className="home">
            <Autocomplete
                id="free-solo-demo"
                options={options.map((option) => option.city)}
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
