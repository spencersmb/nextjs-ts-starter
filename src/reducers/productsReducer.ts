import {actionTypes} from '../actions/actionTypes'
import initialState from './initialState'
import * as normalizerUtils from '../utils/normalizrUtils'
import {Reducer} from 'redux'
import {Actions} from '../types/Actions'
// import {IProductState} from '../types/Products'
import {ProductsActionTypes} from '../types/Actions--enums'


// enum ProductsActionTypes {
// 	LOAD_PRODUCTS_SUCCESS = '@@products/FETCH_SUCCESS'
// }
//
// interface ITest {
// 	type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS,
// 	payload: any
// }
//
// export type TestActions =
// 	| ITest


export const productsReducer: Reducer<any> = (state: any = initialState.products, action: Actions): any => {
	switch (action.type) {
		case ProductsActionTypes.LOAD_PRODUCTS_SUCCESS:
			return {
				...state,
				list: {...normalizerUtils.transformNormalizedData(action.payload)}
			}

		case actionTypes.LOAD_PRODUCTS_ERROR:
			return {
				...state,
				error: action.payload,
			}

		default:
			return state
	}
}
