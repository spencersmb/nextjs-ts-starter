import * as React from 'react'
// import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
// import { updateCartState } from '../../actions/productsActions'
// import { Dispatch } from 'redux'
import {IState} from '../../types/Redux'
import {ICartState} from '../../types/Cart'
// import { getLocalStorageCart } from '../../utils/cartUtils'
// import CartCheckout from './myCart_checkout'

interface IProps {
	cart: ICartState
	// updateCartState: (CartState | {}) => void
}

interface IComponentState {
	isOpen: boolean
}

export class MyShoppingCart extends React.Component<IProps, IComponentState> {

	initialState = {isOpen: false}
	state = this.initialState

	// componentDidMount () {
	// 	console.log('getlocalStorage', getLocalStorageCart())
	//
	// 	// check for items in cart on page refresh
	// 	const localStateCart: CartState | {} = getLocalStorageCart()
	//
	// 	if (Object.keys(localStateCart).length > 0) {
	// 		// init redux
	// 		this.props.updateCartState(localStateCart)
	// 	}
	// }

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
				{/*<CartCheckout isOpen={this.state.isOpen} closeCart={this.closeCart}/>*/}
			</div>
		)
	}
}

const mapStateToProps = (state: IState): any => {
	return {
		cart: state.cart
	}
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
// 	return {
// 		updateCartState: bindActionCreators(updateCartState, dispatch)
// 	}
// }

export default connect<IProps>(mapStateToProps)(MyShoppingCart)
