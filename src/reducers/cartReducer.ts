import initialState from './initialState'
import {ICartState} from '@et/types/Cart'
import {Reducer} from 'redux'
import {CartActionTypes} from '@et/types/Actions--enums'
import {Actions} from '@et/types/Actions'
import {totalItemsInCart} from '@et/utils/cartUtils'

export const cartReducer: Reducer<ICartState> = (state: ICartState = initialState.cart, action: Actions): ICartState => {
	switch (action.type) {

		case CartActionTypes.ADD_TO_CART:

			return {
				...state,
				items: {
					...state.items,
					...action.payload.item, // new Item
				}
			}

		case CartActionTypes.UPDATE_CART_TOTAL:

			// calc total items here so we dont use getState in Action creater
			const totalItems = totalItemsInCart(state.items)

			return {
				...state,
				totalItems // es6 destructure totalItems: totalItems
			}
		case CartActionTypes.UPDATE_CART_STATE:
			return {
				...state,
				items: {
					...action.payload.items
				},
				totalItems: action.payload.totalItems
			}

		default:
			return state
	}
}
