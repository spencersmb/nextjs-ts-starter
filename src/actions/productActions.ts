/* tslint:disable object-literal-sort-keys*/

import {IProduct} from 'types/Products'
import {CartActionTypes, ProductsActionTypes} from 'types/Actions--enums'
import {normalize} from 'normalizr'
import * as schema from '../normalizr/productSchema'
import {Actions} from 'types/Actions'
import {Action, Dispatch} from 'redux'
import {toastr} from 'react-redux-toastr'
import {IState} from 'types/Redux'
import ProductsApi from 'api/productsApi'
import {ICartItem, ILocalStorageCart} from 'types/Cart'
import {checkCartForExistingItem} from 'utils/cartUtils'

/*
 Make API Call to get DATA
 */
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

/*
 Successful API call with Data
 */
export const loadProductsSuccess = (response: IProduct[]): Actions => {
	return {
		type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS,
		payload: normalize(response, {products: schema.arrayOfProducts})
	}
}

/*
 Used to identify if Products list loading had an error from the API
 */
export const loadProductsError = (errorMessage: string): Actions => {
	// console.log('PRODUCTS SUCCESS ACTION', response)
	return {
		type: ProductsActionTypes.LOAD_PRODUCTS_ERROR,
		payload: errorMessage
	}
}

/*
 Used to Initialize the cart from localStorage on Page Refresh
 */
export const updateCartState = (cartData: ILocalStorageCart): Actions => {
	return {
		type: CartActionTypes.UPDATE_CART_STATE,
		payload: cartData
	}
}

/*
 Check if the item already exists in the object, if it does
 Just update QTY,
 Else start it at 1
 Afterwards dispatch 2nd event to update the Cart Total
 */
export const addProductToCart = (productSlug: string, cartItems: ICartItem) => (dispatch: Dispatch<Action, IState>) => {

	let cartItem: ICartItem
	if (checkCartForExistingItem(productSlug, cartItems)) {
		cartItem = {
			[productSlug]: {
				qty: cartItems[productSlug].qty++,
				// addtional items we want to have available to us in the cart potentially?
				...cartItems[productSlug]
			},
		}
	} else {
		cartItem = {
			[productSlug]: {qty: 1},
		}
	}

	// First dispatch ADD ITEM
	dispatch(
		{
			type: CartActionTypes.ADD_TO_CART,
			payload: {
				item: cartItem
			}
		}
	)

	// After item added - re-calc total
	dispatch(updateCartTotal())
}
/*
 Calc total items in cart using QTY after ADD_TO_CART Action completes
 */
export const updateCartTotal = (): Actions => {
	return {
		type: CartActionTypes.UPDATE_CART_TOTAL
	}
}
