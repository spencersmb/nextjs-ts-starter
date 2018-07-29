/* tslint:disable */

import React from 'react'
import Head from 'next/head'
import {withRouter, WithRouterProps} from 'next/router'
import {connect} from 'react-redux'
import {Action, bindActionCreators, Dispatch} from 'redux'
import {IProduct, IProductState} from '@et/types/Products'
import {Actions} from '@et/types/Actions'
import {ICtx} from '@et/types/Ctx'
import {IWithRouter} from '@et/types/NextJS'
import {IState} from '@et/types/Redux'
import {getAllProducts} from '@et/actions/productActions'
import StandardHoc from '@et/hoc/standardHoc'
import AddToCartButton from '@et/products/addToCartBtn'
import StripeProviderWrapper from '@et/stripe/provider'
import CheckoutForm from '@et/stripe/checkoutForm/index'

const Content = (props: any) => {
	return (
		(
			<div>
				<h1>{props.name}</h1>
				<p>This is the product content src.</p>
			</div>
		)
	)
}

interface IProps {
	products: IProductState,
	router: IWithRouter,
	addToCart: Actions,
	getAllProducts: any
}

interface ILocalState {
	selectedProduct: IProduct | { slug: null }
}


export class ProductDetailPage extends React.Component<IProps & WithRouterProps, ILocalState> {
	static async getInitialProps(ctx: ICtx) {
		/* If refreshing get all the poppers, else poppers should already be loaded */
		const isBrowser = typeof window !== 'undefined'
		if (!isBrowser) {

			const state = ctx.store.getState()
			const productsArray = Object.keys(state.products.list) || []

			if (productsArray.length === 0) {
				await ctx.store.dispatch(getAllProducts())
			}
		}

		return {}
	}

	state = {
		selectedProduct: this.getSelectedProduct()
	}

	getSelectedProduct(): IProduct | { slug: null } {

		if (Object.keys(this.props.products.list).length) {
			// get popper data based on Id passed into url
			return this.props.products.list[this.props.router.query.slug]
		}

		return {slug: null}

	}

	async componentDidMount(): Promise<any> {
		// await this.props.getAllProducts()
	}

	getSnapshotBeforeUpdate(prevProps: IProps) {

		if (Object.keys(prevProps.products.list).length >= 1) {
			return null
		}

		return this.props.products
	}

	// {} hack for parameters Im not using
	componentDidUpdate({}, {}, snapshot: any) {
		if (snapshot !== null) {
			this.setState(() => ({selectedProduct: this.getSelectedProduct()}))
		}
	}

	render() {
		return (
			<div>
				<Head>
					<title>Detail Page</title>
				</Head>
				<Content {...this.state.selectedProduct}/>
				<StripeProviderWrapper>
					<CheckoutForm/>
				</StripeProviderWrapper>
				<AddToCartButton
					selectedProduct={this.state.selectedProduct.slug}/>
			</div>
		)
	}
}

const mapStateToProps = (state: IState) => ({products: state.products})
const mapDispatchToProps = (dispatch: Dispatch<Action, IState>) => {
	return {
		getAllProducts: bindActionCreators(getAllProducts, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StandardHoc(withRouter(ProductDetailPage)))
