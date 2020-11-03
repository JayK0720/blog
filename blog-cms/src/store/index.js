import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import user from './reducer/user';

let reducer = combineReducers({user})

const store = createStore(
	reducer,
	compose(
		applyMiddleware(logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;