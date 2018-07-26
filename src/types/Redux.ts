import {IProductState} from './Products'

export interface IState {
	// breakPoint: number,
	cart: {
		discountCode: any,
		paymentType: string,
		totalItems: number,
		items: {
			[id: string]: {
				qty: number
			}
		}
	},
	products: IProductState,
}
