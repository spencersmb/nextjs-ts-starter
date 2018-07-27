export enum ProductsActionTypes {
	LOAD_PRODUCTS_SUCCESS = '@@products/FETCH_SUCCESS',
	LOAD_PRODUCTS_ERROR = '@@products/FETCH_ERROR'
}

export enum CartActionTypes {
	ADD_TO_CART = '@@cart/ADD_ITEM',
	UPDATE_CART_STATE = '@@cart/UPDATE_STATE',
	UPDATE_CART_TOTAL = '@@cart/UPDATE_TOTAL'
}
