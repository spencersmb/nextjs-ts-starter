import {IState} from '../types/Redux'

const initialState: IState = {
	// breakPoint: 540,
	// cart: {
	// 	discountCode: {},
	// 	items: {},
	// 	paymentType: 'Stripe',
	// 	totalItems: 0,
	// },
	products: {
		error: null,
		list: {}
	},
}

export default initialState
