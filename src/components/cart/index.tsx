import * as React from 'react'
import {connect} from 'react-redux'
import {Action, bindActionCreators, Dispatch} from 'redux'
import styled from 'styled-components'
import CartCheckout from '@et/cart/checkout'
import {getLocalStorageCart} from '@et/utils/cartUtils'
import {updateCartState} from '@et/actions/productActions'
import {media} from '@et/styles/base/mq'
import {ICartState, ILocalStorageCart} from '@et/types/Cart'
import {IState} from '@et/types/Redux'

interface IProps {
	cart: ICartState;

	updateCartState(cart: ILocalStorageCart): void
}

interface IComponentState {
	isOpen: boolean
}

export class MyShoppingCart extends React.Component<IProps, IComponentState> {

	initialState = {isOpen: false}
	state = this.initialState

	componentDidMount() {
		console.log('getlocalStorage', getLocalStorageCart())

		// check for items in cart on page refresh
		const localStateCart: ILocalStorageCart = getLocalStorageCart()

		if (Object.keys(localStateCart).length > 0) {
			// init redux
			this.props.updateCartState(localStateCart)
		}
	}

	openCart = () => {
		this.setState(({isOpen}) => ({
			isOpen: !isOpen,
		}))
	}

	closeCart = () => {
		this.setState(() => ({
			isOpen: false,
		}))
	}

	render() {
		return (
			<Cart style={{position: 'relative', zIndex: 3}}>
				<p>
					Total Items In Cart: {this.props.cart.totalItems}
				</p>
				<button onClick={this.openCart}> Cart Toggle</button>
				<CartCheckout isOpen={this.state.isOpen} closeCart={this.closeCart}/>
			</Cart>
		)
	}
}

const Cart = styled.div`
	p{
		color: red;
		${media.tablet`
			color: green;
		`}
	}
`

const mapStateToProps = (state: IState): any => {
	return {
		cart: state.cart
	}
}
const mapDispatchToProps = (dispatch: Dispatch<Action, IState>) => {
	return {
		updateCartState: bindActionCreators(updateCartState, dispatch)
	}
}

export default connect<IProps>(mapStateToProps, mapDispatchToProps)(MyShoppingCart)
