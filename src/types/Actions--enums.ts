export enum ProductsActionTypes {
	LOAD_PRODUCTS_SUCCESS = '@@products/FETCH_SUCCESS',
	LOAD_PRODUCTS_ERROR = '@@products/FETCH_ERROR'
}

export enum CartActionTypes {
	ADD_TO_CART = '@@cart/ADD_ITEM',
	UPDATE_CART_STATE = '@@cart/UPDATE_LOCAL_STORAGE',
	UPDATE_CART_TOTAL = '@@cart/UPDATE_TOTAL'
}

export enum WindowActionTypes {
	CHANGE_BREAKPOINT = '@@window/CHANGE_BREAKPOINT'
}

export enum OrderActionTypes {
	SUBMIT_ORDER = '@@checkout/SUBMIT_ORDER',
	ORDER_SUCCESS = '@@checkout/ORDER_SUCCESS'
}
