import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import "./App.scss";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Toast from "./components/Toast/Toast";
import { coreActions } from "./store/core/core.actions";
import { coreSelector } from './store/core/core.selector';

const App = () => {
	const dispatch = useDispatch();
	const page = useSelector(coreSelector.getAppPage);
	const preference = useSelector(coreSelector.getUserPreference);

	const tabClasses = pageName => (
		`app__tab-nav-item ${page === pageName && 'app__tab-nav-item--selected'}`
	)
	const changePageHandler = (pageName) => dispatch(coreActions.goToPage(pageName));

	const handleSwitchTheme = () => dispatch(coreActions.switchTheme());
	const handleChangeUnit = () => dispatch(coreActions.changeTempUnit());

	return (
		<div className={`app ${preference.theme}`}>
			<div className="app__header">
				<h1>Weather App</h1>
				<div className="app__preference">
					<div className="app__theme" onClick={handleSwitchTheme}>
						{preference.theme === 'light' ? <WbSunnyIcon /> : <Brightness2Icon />}
					</div>
					<div className="app__degree-unit" onClick={handleChangeUnit}>
						{preference.tempUnit === 'c' ? 'C' : 'F'}
					</div>
				</div>
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
			<Toast />
		</div>
	);
};

export default App;
