import React from 'react'
import Link from 'next/link'
import StandardHoc from '@et/hoc/standardHoc'
import {Action, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getAllProducts} from '@et/actions/productActions'
import {Dispatch} from 'redux'
import ProductsList from '@et/products/list'
import {ICtx} from '@et/types/Ctx'
import {IState} from '@et/types/Redux'
import {IProductState} from '@et/types/Products'


interface IProps {
	/** getAllProducts - Action passed in from Redux to change Font Size */
	getAllProducts: () => any[],

	/** products - Action passed in from Redux to change Font Size */
	products: IProductState
}

export class HomePage extends React.Component<IProps> {
	static async getInitialProps(ctx: ICtx) {

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

	// async componentDidMount(): Promise<void> {
	//
	// 	if (Object.keys(this.props.products.list).length) {
	// 		return
	// 	}
	// 	await this.props.getAllProducts()
	// }

	render() {
		return (
			<div>
				<div className="hero">
					<h1 className="title">Welcome to Next!</h1>
					<h3>Sample Products Lists</h3>
					<div>
						<ProductsList/>
					</div>
					<p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
					<div className="row">
						<Link href="https://github.com/zeit/next.js#getting-started">
							<a className="card">
								<h3>Getting Started &rarr;</h3>
								<p>Learn more about Next on Github and in their examples</p>
							</a>
						</Link>
						<Link href="https://open.segment.com/create-next-app">
							<a className="card">
								<h3>Examples &rarr;</h3>
								<p>
									Find other example boilerplates on the <code>create-next-app</code> site
								</p>
							</a>
						</Link>
						<Link href="https://github.com/segmentio/create-next-app">
							<a className="card">
								<h3>Create Next App &rarr;</h3>
								<p>Was this tool helpful? Let us know how we can improve it</p>
							</a>
						</Link>
					</div>
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state: IState): any => {
	return {
		products: state.products
	}
}
const mapDispatchToProps = (dispatch: Dispatch<Action, IState>) => {
	return {
		getAllProducts: bindActionCreators(getAllProducts, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StandardHoc(HomePage, 'Home'))


