import * as React from 'react'
import {connect} from 'react-redux'
import Head from 'next/head'
import {ICtx} from '@et/types/Ctx'

// import { getAllProducts } from '../actions/productsActions'
// import LoadingBar from '../components/loadingBar/loadingBar'

export interface IStaticInterface {
	getInitialProps?(ctx: ICtx): void
}

export default <C extends object>(Page: React.ComponentType<C> & IStaticInterface, title: string = '') => {
	class GenericLayout extends React.Component<any> {

		static async getInitialProps(ctx: ICtx) {
			// const headers = ctx.res ? ctx.res._headers : undefined
			// const state = ctx.store.getState()
			let pageProps

			if (typeof Page.getInitialProps === 'function') {
				pageProps = Page.getInitialProps ? (await Page.getInitialProps(ctx)) : {}
			}

			const isBrowser = typeof window !== 'undefined'

			try {
				/* If no browser, we're on the server */
				if (!isBrowser) {
					// await ctx.store.dispatch(getAllProducts())
				}
			} catch (e) {
				console.log('genericLayout Error', e)
			}

			return {
				...pageProps,
				currentUrl: ctx.pathname,
			}
		}

		constructor(props: any) {
			super(props)
		}

		render() {
			return (
				<div>
					<Head>
						<title>{title}</title>
					</Head>
					<div className='pageWrapper'>
						<Page {...this.props} />
					</div>

					{/*{this.props.isLoading && <LoadingBar/>}*/}
				</div>
			)
		}
	}

	// const mapStateToProps = (state: State): mixed => ({products: state.products})
	return connect()(GenericLayout)
}
