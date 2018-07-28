import {CartActionTypes, ProductsActionTypes, WindowActionTypes} from './Actions--enums'
import {ICartItem, ILocalStorageCart} from './Cart'

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
	payload: ILocalStorageCart
}

export interface IUpdateCartTotal {
	type: CartActionTypes.UPDATE_CART_TOTAL
}

export interface IChangeBreakPoint {
	type: WindowActionTypes.CHANGE_BREAKPOINT,
	payload: number
}

type ProductActions =
	| ILoadProductsSuccess
	| ILoadProductsError

type CartActions =
	| IAddItemToCart
	| IUpdateCartState
	| IUpdateCartTotal

type WindowActions =
	| IChangeBreakPoint

export type Actions =
	| WindowActions
	| ProductActions
	| CartActions


