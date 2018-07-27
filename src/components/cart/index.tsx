import * as React from 'react'
import {connect} from 'react-redux'
import {IState} from '../../types/Redux'
import {ICartState, ILocalStorageCart} from '../../types/Cart'
import CartCheckout from './checkout'
import {getLocalStorageCart} from '../../utils/cartUtils'
import {Action, bindActionCreators, Dispatch} from 'redux'
import {updateCartState} from '../../actions/productActions'

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
			<div style={{position: 'relative', zIndex: 3}}>
				Total Items In Cart: {this.props.cart.totalItems}
				<button onClick={this.openCart}> Cart Toggle</button>
				<CartCheckout isOpen={this.state.isOpen} closeCart={this.closeCart}/>
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
		updateCartState: bindActionCreators(updateCartState, dispatch)
	}
}

export default connect<IProps>(mapStateToProps, mapDispatchToProps)(MyShoppingCart)
