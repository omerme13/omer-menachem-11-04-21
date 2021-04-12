import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";

const App = () => {
    const [page, setPage] = useState('Home');

	return (
		<div className="app">
			<div className="app__header">
				<h1>Weather App</h1>
				<div className="app__tab-nav">
					<div
						className={`app__tab-nav-item ${page === 'Home' && 'app__tab-nav-item--selected'}`}
						onClick={() => setPage('Home')}
					>
						Home
					</div>
					<div
						className={`app__tab-nav-item ${page === 'Favorites' && 'app__tab-nav-item--selected'}`}
						onClick={() => setPage('Favorites')}
					>
						Favorites
					</div>
				</div>
			</div>
			{/* <Route path="/" component={Home} exact />
			<Route path="/favorites" component={Favorites} /> */}
			{page === 'Home'
				? <Home />
				: <Favorites />
			}
		</div>
	);
};

export default App;
