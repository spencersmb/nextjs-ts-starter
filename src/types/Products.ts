export interface IProduct {
	id: number,
	name: string,
	description: string,
	categories: [
		{
			id: number,
			name: string,
			slug: string
		}
		],
	short_description: string,
	images: [
		{
			id: number,
			src: string,
			name: string,
			alt: string,
		}
		],
	price: string,
	sale_price: string,
	slug: string,
	tags: [
		{
			id: number,
			name: string,
			slug: string
		}
		],
	acf: {
		extendedLicense: {
			isExtended: string,
			item: string
		}
	}
}

export interface IProductState {
	readonly list: {
		[id: string]: IProduct,
	},
	readonly error?: any
}

export interface IProducts {
	[id: string]: IProduct
}

// Normalizer
type NormalizedReturnValue =
	| IProduct

export interface INormalizedReturn {
	[id: string]: NormalizedReturnValue
}
