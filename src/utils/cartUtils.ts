import {ICartItem} from '../types/Cart'

export const totalItemsInCart = (items: ICartItem): number => {
	const itemKeysArray = Object.keys(items)

	return itemKeysArray.reduce((total, slug: string) => {
		return total + items[slug].qty
	}, 0)
}
