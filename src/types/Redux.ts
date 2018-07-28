import {IProductState} from './Products'
import {Action, Dispatch} from 'redux'

export interface IState {
	breakPoint: number,
	cart: {
		discountCode: any,
		paymentType: string,
		totalItems: number,
		items: {
			[id: string]: {
				qty: number
			}
		}
	},
	products: IProductState,
}

export interface IReduxStore {
	dispatch: Dispatch<Action, IState>,
	getState: () => any,
	liftedStore: any,
	replaceReducer: (e: any) => any,
	subscribe: (s: any) => any,
	'Symbol(observable)': () => any
}
