// @flow

import {env} from './envConfig'
import fetched from 'isomorphic-unfetch'
import {IOrderDetails} from '../types/Order'

interface IFinalOrder extends IOrderDetails {
	payment_token: string
}

class CheckoutApi {
	static submitOrder(orderData: IFinalOrder): Promise<Response> {
		const url: string = `${env.BACKEND_URL}/wp-json/customroutes/orders`

		return fetched(
			url,
			{
				body: JSON.stringify(orderData),
				headers: {
					'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
				},
				method: 'POST',
			}
		)
	}
}

export default CheckoutApi
