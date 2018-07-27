import {actionTypes} from '../actions/actionTypes'
import initialState from './initialState'
import * as normalizerUtils from '../utils/normalizrUtils'
import {Reducer} from 'redux'
import {Actions} from '../types/Actions'
import {ProductsActionTypes} from '../types/Actions--enums'
import {IProductState} from '../types/Products'


export const productsReducer: Reducer<IProductState> = (state: IProductState = initialState.products, action: Actions): any => {
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
