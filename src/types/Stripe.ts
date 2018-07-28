export interface IStripeCreditCardEvent {
	brand: string,
	complete: boolean,
	empty: boolean,
	error: {
		type: string,
		code: string,
		message: string,
	} | void,
	value: {
		postalCode: string
	}
}

export interface IStripeToken {
	// card: {
	// 	id: string,
	// 	object: string,
	// 	brand: string,
	// 	country: string,
	// 	exp_month: number,
	// 	exp_year: number,
	// 	name: string
	// },
	client_ip: string,
	email: string,
	created: number,
	id: string,
	livemode: boolean,
	type: string
}
export interface IStripeTokenObject {
	stripeToken: IStripeToken
}
// export interface StripeRegisterUser StripeTokenObject
