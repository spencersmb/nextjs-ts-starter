import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productsReducer} from './reducers/productsReducer'
import initState from './reducers/initialState'
import {IState} from '@et/types/Redux'
import {IProductState} from '@et/types/Products'
import {cartReducer} from './reducers/cartReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {ICartState} from '@et/types/Cart'
import {breakPointReducer} from './reducers/breakPointReducer'

interface IAppState {
	breakPoint: number,
	products: IProductState,
	toastr: any,
	cart: ICartState
}

export const initStore = (initialState: IState = initState) => {
	// mirror of state from original app
	const reducers = combineReducers<IAppState>({
		breakPoint: breakPointReducer,
		cart: cartReducer,
		products: productsReducer,
		toastr: toastrReducer,
	})

	const env = process.env.NODE_ENV || 'development'

	// console.log('env', env)

	if (typeof window !== 'undefined' && env === 'development') {
		return createStore(
			reducers,
			initialState,
			composeWithDevTools(applyMiddleware(thunkMiddleware))
		)
	}

	return createStore(
		reducers,
		initialState,
		applyMiddleware(thunkMiddleware),
	)
}
