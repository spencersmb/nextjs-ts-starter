import {INormalizedReturn} from '../types/Products'

export const transformKeyValueData = (action: any): INormalizedReturn => {
	return {
		[action.product.slug]: action.product
	}
}

export const transformNormalizedData = (action: any): INormalizedReturn => {

	let data: INormalizedReturn = {}
	for (const key of Object.keys(action.result)) {
		const item = action.result[key]

		data = {
			...data,
			[item.slug]: item
		}
	}

	return data
}
