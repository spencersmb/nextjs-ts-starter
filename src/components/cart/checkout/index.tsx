import * as React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'
import {getCartTotal} from '@et/utils/cartUtils'
import {ICartState} from '@et/types/Cart'
import {IProductState} from '@et/types/Products'
import {IState} from '@et/types/Redux'

interface IPropsPublic {
	isOpen: boolean,
	closeCart: () => void
}

interface IPropsRedux {
	cart: ICartState,
	products: IProductState,
}

export class CartCheckout extends React.Component<IPropsPublic & IPropsRedux> {
	render() {
		return (
			<CSSTransition
				in={this.props.isOpen}
				timeout={200}
				classNames='etCart'
				unmountOnExit={true}
			>
				<CartWrapper>
					<button onClick={this.props.closeCart}> Close</button>
					<div>
						Total:
						{getCartTotal(this.props.cart.items, this.props.products.list)}
					</div>
					{/*List of products in cart*/}
					{/*Checkout Card-> type of payment(paypal or cc), total, Stripe/Paypal Form*/}
				</CartWrapper>
			</CSSTransition>
		)
	}
}

// Cart styles
const CartWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	height: 100%;
	width: 100%;
	background: #58abc3;
	transform:translateY(-45%) translateX(-50%);
	z-index: 4;
	transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
`

const mapStateToProps = (state: IState): any => {
	return {
		cart: state.cart,
		products: state.products
	}
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
// 	return {
// 		updateCartState: bindActionCreators(updateCartState, dispatch)
// 	}
// }
//
export default connect<IPropsRedux>(mapStateToProps)(CartCheckout)
