import {ProductsActionTypes} from './Actions--enums'

export interface ILoadProducts {
	type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS,
	payload: any
}

export type Actions =
	| ILoadProducts



