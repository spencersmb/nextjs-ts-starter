export interface ICartState {
	discountCode: any,
	paymentType: string,
	totalItems: number,
	items: ICartItem
}

export interface ICartItem {
	[id: string]: { qty: number }
}
