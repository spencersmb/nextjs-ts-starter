/* tslint:disable object-literal-sort-keys*/

import {IProduct} from '../types/Products'
import {ProductsActionTypes} from '../types/Actions--enums'
import {normalize} from 'normalizr'
import * as schema from '../normalizr/productSchema'
import {Actions} from '../types/Actions'
import {Action, Dispatch} from 'redux'
import {toastr} from 'react-redux-toastr'
import {IState} from '../types/Redux'
import ProductsApi from '../api/productsApi'

export const getAllProducts = () => async (dispatch: Dispatch<Action, IState>): Promise<void> => {
	// Add Loading Dispatch spinner
	// Once working ask question on how to do error handling with es6
	console.log('get all products action init')

	// insert LOADING BAR ACTION === true  for PRODUCTS
	try {
		const response: Response = await ProductsApi.getAllProducts()

		// await statusCheck(response, dispatch)

		const body: IProduct[] = await response.json()


		// insert LOADING BAR ACTION === false  for PRODUCTS
		dispatch(loadProductsSuccess(body))
	} catch (e) {

		toastr.error('Error:', e.message)
		dispatch(loadProductsError(e.message))
	}

}


export const loadProductsSuccess = (response: IProduct[]): Actions => {
	return {
		type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS,
		payload: normalize(response, {products: schema.arrayOfProducts})
	}
}


export const loadProductsError = (errorMessage: string): Actions => {
	// console.log('PRODUCTS SUCCESS ACTION', response)
	return {
		type: ProductsActionTypes.LOAD_PRODUCTS_ERROR,
		payload: errorMessage
	}
}
