import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { epicMiddleware, store } from "./store/store";
import { rootEffects } from "./store/root/root.effects";
import { weatherEffects } from "./store/weather/weather.effects";
import { weatherActions } from "./store/weather/weather.actions";
import { coreActions } from "./store/core/core.actions";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

epicMiddleware.run(rootEffects);
store.dispatch(coreActions.initApp());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
