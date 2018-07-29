import {config} from 'env'
import fetched from 'isomorphic-unfetch'

class ProductsApi {
	static getAllProducts(): Promise<Response> {
		console.log('get all products API CALL')

		const url: string = `${config.BACKEND_URL}/wp-json/customroutes/products`
		// const url: string = `${envConfig.BACKEND_URL}/wp-json/wp/v2/posts`

		return fetched(
			url,
			{
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'GET',
				mode: 'cors',
			}
		)
	}
}

export default ProductsApi
