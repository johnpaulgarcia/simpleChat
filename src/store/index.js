import {createStore,applyMiddleware} from 'redux';
import Thunk from 'redux-thunk'
import reducer from '../reducers';
export const configureStore = () => {
	return createStore(
			reducer,
			applyMiddleware(Thunk)
		)
}