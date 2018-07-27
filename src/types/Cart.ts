export interface ICartState {
	discountCode: any,
	paymentType: string,
	totalItems: number,
	items: ICartItem
}

export interface ICartItem {
	[id: string]: { qty: number }
}

export interface ILocalStorageCart {items: ICartItem, totalItems: number}
