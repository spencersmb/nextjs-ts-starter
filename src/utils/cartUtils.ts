import {ICartItem, ILocalStorageCart} from '../types/Cart'
import {IProducts} from '../types/Products'


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
