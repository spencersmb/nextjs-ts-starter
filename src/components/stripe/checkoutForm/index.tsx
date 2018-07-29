import React from 'react'
import {injectStripe, CardElement, ReactStripeElements} from 'react-stripe-elements'
import {connect} from 'react-redux'
import {Action, bindActionCreators, Dispatch} from 'redux'
import {createOrder} from '@et/actions/orderActions'
import {IState} from '@et/types/Redux'
import {IOrderComplete, IOrderDetails} from '@et/types/Order'

export const logFormData = (formData: any) => {
	for (const pair of formData.entries()) {
		console.log(pair[0] + ', ' + pair[1])
	}
}

interface IProps extends ReactStripeElements.InjectedStripeProps {
	billingPrice: string,
	pristine: boolean,
	createOrder: (orderDetails: IOrderDetails, tokenId: string) => Promise<IOrderComplete>
}

interface ILocalState {
	completeCredit: boolean,
	userSubmitting: boolean
}

/*
	How Sending an order/payment works
	1. Create the order on the client
	2. Send order to WC to create order in DB
	3. On success - create Stripe Token to charge card
	4. On success - send order + stripe token to payment gateway
 */
class CheckoutForm extends React.Component<IProps, ILocalState> {

	state = {
		completeCredit: false,
		userSubmitting: false
	}


	// 1. Create Stripe Token
	handleSubmit = async (ev: any) => {
		ev.preventDefault()

		const myOrderData: IOrderDetails = {
			billing:
				{
					email: 'nuna.petunia@gmail.com',
					first_name: 'Teela',
					last_name: 'B',
				},
			customer_user_agent: 'nuna.petunia@gmail.com',
			line_items: [
				{
					name: 'Watercolor texture kit Vol. 1',
					price: '12',
					product_id: 11,
					quantity: 1,
				},
				{
					name: 'Skinny Jeans',
					price: '16',
					product_id: 30,
					quantity: 1,
				}
			],
			payment_method: 'stripe',
			payment_method_title: 'Credit Card (Stripe)',
			prices_include_tax: true,
			set_paid: false,
			total: '12.00',
			total_tax: '12.00',
		}
		// 1. UX to show we made a submit
		// this.props.showLoadingBar()
		// this.setState({
		// 	userSubmitting: true
		// })

		// 2. Create Token
		// Within the context of `Elements`, this call to createToken knows which Element to
		// tokenize, since there's only one in this group.
		let result: stripe.TokenResponse = {}

		if (this.props.stripe) {
			result = await this.props.stripe.createToken(
				{
					name: `${myOrderData.billing.first_name} ${myOrderData.billing.last_name}`
				}
			)
			console.log('Received Stripe token:', result)
		}


		// convert to func
		if (result.error) {
			// toaster error
			// toastr.error('error', result.error.message)
			// this.props.hideLoadingBar()
			// this.setState({
			// 	userSubmitting: false
			// })
			console.log('error handler:', result.error.message)
			return
		}

		// 3. Success Token created
		if (result.token) {
			// 2. Submit form to server
			await this.stripeTokenHandler(result.token, myOrderData)
			return
		}

		// toastr.error('error', 'payment not submitted')
		// this.props.hideLoadingBar()
		// this.setState({
		// 	userSubmitting: false
		// })
		console.log('payment not submitted')

	}

	// 2. Send Token + Form props to server
	stripeTokenHandler = async (token: stripe.Token, orderData: IOrderDetails) => {
		// Submit form to server with new object created
		// const stripeObjectAdded: any = {
		// 	...formProps,
		// 	payment_method: 'stripe',
		// 	stripeToken: token
		// }
		// console.log('stripeObjectAdded', stripeObjectAdded)

		try {

			// currenty we have 2 requests
			// create order request on API
			// Then send payment to gateway as 2nd
			const myOrder: IOrderComplete = await this.props.createOrder(orderData, token.id)
			console.log('myOrder', myOrder)

			// const myOrder: OrderDetails = {
			// 	'order_id': '52',
			// 	'payment_token': token.id,
			// 	payment_method: 'stripe'
			// }

			// await this.props.authenticateUser(stripeObjectAdded)
			// this.props.signInComplete()
			// this.props.hideLoadingBar()
			// Router.push(`/dashboard`)
		} catch (e) {
			// this.props.hideLoadingBar()
			// this.setState({
			// 	userSubmitting: false
			// })
			console.log('stripeTokenHandler error', e)

		}
	}

	onCreditCardChange = (e: stripe.elements.ElementChangeResponse) => {
		if (e.complete) {
			this.setState(() => ({completeCredit: true}))
		} else if (!e.complete && this.state.completeCredit) {
			this.setState(() => ({completeCredit: false}))
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<CardElement onChange={this.onCreditCardChange}/>
				<button>Confirm order</button>
			</form>
		)
	}
}

const mapStateToProps = (state: IState): any => {
	return {
		cart: state.cart
	}
}
const mapDispatchToProps = (dispatch: Dispatch<Action, IState>): any => {
	return {
		createOrder: bindActionCreators(createOrder, dispatch),
	}
}

export default injectStripe(connect<IProps>(mapStateToProps, mapDispatchToProps)(CheckoutForm))
// export default injectStripe(CheckoutForm)
