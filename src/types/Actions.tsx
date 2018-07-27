import {CartActionTypes, ProductsActionTypes} from './Actions--enums'
import {ICartItem, ICartState} from './Cart'

// import {Dispatch} from 'redux'

export interface ILoadProductsSuccess {
	type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS,
	payload: any
}

export interface ILoadProductsError {
	type: ProductsActionTypes.LOAD_PRODUCTS_ERROR,
	payload: string
}

export interface IAddItemToCart {
	type: CartActionTypes.ADD_TO_CART,
	payload: {
		item: ICartItem
	}
}

export interface IUpdateCartState {
	type: CartActionTypes.UPDATE_CART_STATE,
	payload: ICartState
}

export interface IUpdateCartTotal {
	type: CartActionTypes.UPDATE_CART_TOTAL
}

type ProductActions =
	| ILoadProductsSuccess
	| ILoadProductsError

type CartActions =
	| IAddItemToCart
	| IUpdateCartState
	| IUpdateCartTotal

export type Actions =
	| ProductActions
	| CartActions

// Dispatch
// export type DispatchActions = (action: Actions) => Dispatch<Actions>

