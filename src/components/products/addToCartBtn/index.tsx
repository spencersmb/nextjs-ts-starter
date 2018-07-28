import React from 'react'
import {Action, bindActionCreators, Dispatch} from 'redux'
import {connect} from 'react-redux'
import {ICartItem, ICartState} from '../../../types/Cart'
import {IState} from '../../../types/Redux'
import {addProductToCart} from '../../../actions/productActions'
import {updateLocalStorageCart} from '../../../utils/cartUtils'

interface IPropsPublic {
	selectedProduct: string | null,
}

interface IPropsRedux {
	addToCart: (productSlug: string, cartItems: ICartItem) => void,
	cart: ICartState
}

export class AddToCartBtn extends React.Component<IPropsPublic & IPropsRedux> {

	handleAddToCart = async () => {
		// add item to Redux State
		// using await here to safely complete adding an item to the redux cart
		// then dispatching 2nd items to calculate new total of items in cart
		if (this.props.selectedProduct) {
			await this.props.addToCart(this.props.selectedProduct, this.props.cart.items)
			updateLocalStorageCart(this.props.cart)
		}

	}

	render() {
		return (
			<div onClick={this.handleAddToCart}>
				Add To Cart
			</div>
		)
	}
}

const mapStateToProps = (state: IState): any => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch: Dispatch<Action, IState>) => {
	return {
		addToCart: bindActionCreators(addProductToCart, dispatch)
	}
}

export default connect<IPropsRedux>(mapStateToProps, mapDispatchToProps)(AddToCartBtn)
