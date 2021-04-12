import React from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';

import "./Home.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WeatherContainer from "../WeatherContainer/WeatherContainer";

const Home = () => {

	const options = ['omer', 'dave']
	return (
		<div className="home">
			{/* <div className="home__header">
				<h1>Weather App</h1>
				<div className="home__tab-nav">
					<div className="home__tab-nav-item">Home</div>
					<div className="home__tab-nav-item">Favorites</div>
				</div>
			</div> */}
			<FavoriteIcon className="favorite-icon" />
			<Autocomplete
				id="grouped-demo"
				options={options}
				groupBy={(option) => option.firstLetter}
				getOptionLabel={(option) => option.title}
				style={{ width: 300, background: '#fff' }}
				renderInput={() =>{}}
			/>
			<WeatherContainer />
		</div>
	);
};

export default Home;
