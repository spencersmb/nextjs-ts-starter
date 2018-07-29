import {IOrderComplete, IOrderDetails} from '@et/types/Order'
import {Action, Dispatch} from 'redux'
import {OrderActionTypes} from '@et/types/Actions--enums'
import {IState} from '@et/types/Redux'
import CheckoutApi from '@et/api/woocommerce'

export const createOrder = (orderData: IOrderDetails, stripeTokenId: string) => async (dispatch: Dispatch<Action, IState>): Promise<IOrderComplete> => {
	dispatch({
		type: OrderActionTypes.SUBMIT_ORDER
	})

	const completeOrder = {
		payment_token: stripeTokenId,
		...orderData
	}
	console.log('completeOrder', completeOrder)

	const request: Response = await CheckoutApi.submitOrder(completeOrder)
	console.log('request', request)

	// await statusCheck(userRequest, dispatch)

	const json: IOrderComplete = await request.json()
	console.log('stripe respnse', json)

	dispatch({
		type: OrderActionTypes.ORDER_SUCCESS
	})
	// return order
	return json
}
