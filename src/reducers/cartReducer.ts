import initialState from './initialState'
import {ICartState} from '../types/Cart'
import {Reducer} from 'redux'
import {CartActionTypes} from '../types/Actions--enums'
import {Actions} from '../types/Actions'
import {totalItemsInCart} from '../utils/cartUtils'

export const cartReducer: Reducer<ICartState> = (state: ICartState = initialState.cart, action: Actions): ICartState => {
	switch (action.type) {

		case CartActionTypes.ADD_TO_CART:

			return {
				...state,
				items: {
					...action.payload.item, // updated Item
					...state.items
				}
			}

		case CartActionTypes.UPDATE_CART_TOTAL:

			// calc total items here so we dont use getState in Action creater
			const totalItems = totalItemsInCart(state.items)

			return {
				...state,
				totalItems
			}
		case CartActionTypes.UPDATE_CART_STATE:
			return {
				...action.payload
			}

		default:
			return state
	}
}
