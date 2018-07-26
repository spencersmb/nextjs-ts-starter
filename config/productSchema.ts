import {schema} from 'normalizr'

export const store = new schema.Entity('stores')
export const arrayOfStores = new schema.Array(store)

export const product = new schema.Entity('products')
export const arrayOfProducts = new schema.Array(product)
