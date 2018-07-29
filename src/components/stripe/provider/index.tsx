import * as React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import {config} from 'env'
import {ICustomWindow} from 'types/Window'

interface IStripeProviderProps {
	stripe: any | null
}

interface IState extends IStripeProviderProps {
	show: boolean,
}

declare let window: ICustomWindow

export class StripeProviderWrapper extends React.Component<{}, IState> {
	scriptTag: HTMLElement | null = null
	state = {
		show: false,
		stripe: null
	}

	componentDidMount() {
		if (window.Stripe) {
			console.log('has Stripe already')

			this.setState(() => ({
				show: true,
				stripe: window.Stripe(config.STRIPE_KEY)
			}), () => {
				console.log('stripe already loaded complete')

			})
		} else {
			this.scriptTag = document.querySelector('#stripe-js')
			if (this.scriptTag) {
				this.scriptTag.addEventListener('load', this.loadStripe)
			}
		}
	}

	loadStripe = () => {
		this.setState(() => ({
			show: true,
			stripe: window.Stripe(config.STRIPE_KEY)
		}), () => {
			console.log('loadStripe complete')
		})
	}

	render() {
		return (
			<StripeProvider stripe={this.state.stripe}>
				<Elements>
					{this.props.children}
				</Elements>
			</StripeProvider>
		)
	}
}

export default StripeProviderWrapper

