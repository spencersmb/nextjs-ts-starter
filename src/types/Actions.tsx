import {CartActionTypes, ProductsActionTypes} from './Actions--enums'
import {ICartItem, ICartState} from './Cart'

export interface ILoadProducts {
	type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS,
	payload: any
}

type ProductActions =
	| ILoadProducts

export interface IAddItemToCart {
	type: CartActionTypes.ADD_TO_CART,
	payload: {
		item: ICartItem
	}
}

export interface IUpdateCart {
	type: CartActionTypes.UPDATE_CART_STATE,
	payload: ICartState
}

type CartActions =
	| IAddItemToCart
	| IUpdateCart

export type Actions =
	| ProductActions
	| CartActions



