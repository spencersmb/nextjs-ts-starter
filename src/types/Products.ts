interface ICat {
	id: number,
	name: string,
	slug: string
}

interface Image {
	id: number,
	src: string,
	name: string,
	alt: string
}

interface Itag {
	id: number,
	name: string,
	slug: string
}

export interface IProduct {
	id: number,
	name: string,
	description: string,
	categories: ICat[],
	short_description: string,
	images: Image[],
	price: string,
	sale_price: string,
	slug: string,
	tags: Itag [],
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
