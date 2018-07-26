// @flow
import initialState from './initialState'
import {ICartState} from '../types/Cart'
import {Reducer} from 'redux'
// import { actionTypes } from '../actions/actionTypes'
// import { totalItemsInCart } from '../utils/cartUtils'

export const cartReducer: Reducer<ICartState> = (state: ICartState = initialState.cart, action: any): ICartState => {
	switch (action.type) {

		// case actionTypes.ADD_TO_CART:
		//
		// 	return {
		// 		...state,
		// 		items: {
		// 			...action.payload.item, // updated Item
		// 			...state.items
		// 		}
		// 	}
		//
		// case actionTypes.UPDATE_CART_TOTAL:
		//
		// 	// calc total items here so we dont use getState in Action creater
		// 	const totalItems = totalItemsInCart(state.items)
		//
		// 	return {
		// 		...state,
		// 		totalItems: totalItems
		// 	}
		// case actionTypes.UPDATE_CART_STATE:
		// 	return {
		// 		...action.payload
		// 	}

		default:
			return state
	}
}
