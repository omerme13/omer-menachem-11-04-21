import { createStore, applyMiddleware, compose } from "redux";
import { RootReducer } from "./root/root.reducer";
import {createEpicMiddleware} from 'redux-observable';

export const epicMiddleware = createEpicMiddleware();


const composeEnhancers = process.env.NODE_ENV === "development"
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: null || compose;

export const store = createStore(
	RootReducer,
	composeEnhancers(applyMiddleware(epicMiddleware))
);
