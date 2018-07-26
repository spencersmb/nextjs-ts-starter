/* tslint:disable object-literal-sort-keys*/

import {IProduct} from '../types/Products'
import {ProductsActionTypes} from '../types/Actions--enums'
import {normalize} from 'normalizr'
import * as schema from '../config/productSchema'
import {Actions} from '../types/Actions'

export const loadProductsSuccess = (response: IProduct[]): Actions => {
	return {
		type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS,
		payload: normalize(response, {products: schema.arrayOfProducts})
	}
}
