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
