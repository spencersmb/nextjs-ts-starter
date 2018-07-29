import {ICartItem, ICartState, ILocalStorageCart} from '@et/types/Cart'
import {IProducts} from '@et/types/Products'


/**
 * Calculates the Total number of items added to the cart.
 *
 * How it works:
 * Get all the Keys of the Items in the cart and put them in an array.
 * Loop over each item, get its qty, and then add that qty to the total
 * using a reducer.
 *
 *
 * @param {ICartItem} items All Items in the cart ::Object::
 * @return {number} The result of adding all the items and their Qty in the cart together
 */
export const totalItemsInCart = (items: ICartItem): number => {
	const itemKeysArray = Object.keys(items)

	return itemKeysArray.reduce((total, slug: string) => {
		return total + items[slug].qty
	}, 0)
}

/**
 * Calculates the Dollar Total of all items in the cart.
 *
 * How it works:
 * Get all the Keys of the Items in the cart and put them in an array.
 * Loop over each item, get its qty, and then match the slug of that item with
 * the item in the products state object to get the price of that item.
 * Multiply them and add it to the total using a reducer.
 *
 *
 * @param {ICartItem} items All Items in the cart ::Object::
 * @param {IProducts} products All products in Redux State.
 * @return {number} The result of adding each item in the cart
 */
export const getCartTotal = (items: ICartItem, products: IProducts): string => {

	// Safety check - or else we have cart error cus our list is empty due to async
	if (Object.keys(products).length < 1) {
		return '0.00'
	}
	const itemKeysArray: string[] = Object.keys(items)

	return itemKeysArray.reduce((total, slug: string) => {
		// item
		const qty: number = items[slug].qty
		const product: number = parseInt(products[slug].price, 0)

		return total + (product * qty)
	}, 0).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}

/**
 * Calculates the Dollar Total of all items in the cart.
 *
 * How it works:
 * Get all the Keys of the Items in the cart and put them in an array.
 * Loop over each item, get its qty, and then match the slug of that item with
 * the item in the products state object to get the price of that item.
 * Multiply them and add it to the total using a reducer.
 *
 *
 * @return {ILocalStorageCart} Return what is found in local storage
 */
export const getLocalStorageCart = (): ILocalStorageCart => {
	const value: string | null = localStorage.getItem('et_shop_cart')

	if (value) {
		return JSON.parse(value)
	}

	return {
		items: {},
		totalItems: 0
	}
}

/**
 * Check if the item that is going to be added to the cart already exists.
 *
 * How it works:
 * Take the slug of the item going to be added, and the current items in the cart to check if the
 * item is in the cart already or not. If its found - return true.
 *
 * @param {string} itemSlug - Slug of the product going to be added to cart
 * @param {object} itemsList - All products currently in Redux Cart
 * @return {boolean}
 */
export const checkCartForExistingItem = (itemSlug: string, itemsList: any = {}): boolean => {
	return Object.keys(itemsList).filter(key => key === itemSlug).length > 0
}

/**
 * Update LocalStorage
 *
 * How it works;
 * Filter out possibly sensitive data like discount code and paymentType
 *
 * @param {ICartState} updatedCart - New Cart Object from Redux Store
 */
export const updateLocalStorageCart = (updatedCart: ICartState) => {
	const allowedKeys = ['items', 'totalItems']
	const filteredObject = Object.keys(updatedCart)
		.filter(key => allowedKeys.includes(key))
		.reduce((obj, key) => {
			obj[key] = updatedCart[key]
			return obj
		}, {})

	localStorage.setItem('et_shop_cart', JSON.stringify(filteredObject))

}
