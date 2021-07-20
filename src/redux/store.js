import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './modules';

const configureStore = (reducers = {}, preLoadedState = {}, middleWares = []) =>
	createStore(
		combineReducers({ ...rootReducers, ...reducers }),
		preLoadedState,
		composeWithDevTools(applyMiddleware(...middleWares, thunk, reduxLogger))
	);

export default configureStore;
