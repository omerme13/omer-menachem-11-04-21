import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.scss";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import { coreActions } from "./store/core/core.actions";
import { coreSelector } from './store/core/core.selector';

const App = () => {
	const dispatch = useDispatch();
	const page = useSelector(coreSelector.getAppPage);

	const tabClasses = pageName => (
		`app__tab-nav-item ${page === pageName && 'app__tab-nav-item--selected'}`
	)
	const changePageHandler = (pageName) => dispatch(coreActions.goToPage(pageName));

	return (
		<div className="app">
			<div className="app__header">
				<h1>Weather App</h1>
				<div className="app__tab-nav">
					<div
						className={tabClasses('Home')}
						onClick={() => changePageHandler('Home')}
					>
						Home
					</div>
					<div
						className={tabClasses('Favorites')}
						onClick={() => changePageHandler('Favorites')}
					>
						Favorites
					</div>
				</div>
			</div>
			{page === 'Home'
				? <Home />
				: <Favorites />
			}
		</div>
	);
};

export default App;
