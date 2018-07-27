import React from 'react'
import Link from 'next/link'
// import StandardHoc from '../hoc/standardPage'
import {Action, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getAllProducts} from '../src/actions/productActions'
import {Dispatch} from 'redux'
// import ProductsList from '../components/products/productsList'
// import fetch from 'isomorphic-unfetch'
// import { envConfig } from '../config/envConfig'
// import {ICtx} from '../src/types/Ctx'
import {IState} from '../src/types/Redux'
import {IProductState} from '../src/types/Products'


interface IProps {
	/** getAllProducts - Action passed in from Redux to change Font Size */
	getAllProducts: () => any[],

	/** products - Action passed in from Redux to change Font Size */
	products: IProductState
}

export class HomePage extends React.Component<IProps> {
	static async getInitialProps() {
		// ctx: ICtx
		// const user = ctx
		// let pageProps
		try {

			// await ctx.store.dispatch(getAllProducts())
			// const url: string = `${envConfig.BACKEND_URL}/wp-json/customroutes/products`
			// const res = await fetch(url)
			// pageProps = await res.json()
			// console.log(`Fetched show: ${pageProps}`)

		} catch (e) {
			console.log('store API error', e)

		}
		return {}
	}

	async componentDidMount(): Promise<void> {

		if (Object.keys(this.props.products.list).length) {
			return
		}

		await this.props.getAllProducts()
	}

	render() {
		return (
			<div>
				<div className="hero">
					<h1 className="title">Welcome to Next!</h1>
					<h3>Sample Products Lists</h3>
					<div>
						{/*<ProductsList/>*/}
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

// export default HomePage
// export default connect(mapStateToProps, mapDispatchToProps)(StandardHoc(HomePage, 'Home'))
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


