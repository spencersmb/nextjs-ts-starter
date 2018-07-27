import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../src/store'
// import ResizeObserver from '../components/utils/resizeObserver'
import MyShoppingCart from '../src/components/cart'
import ReduxToastr from 'react-redux-toastr'

const Wrapper: React.SFC<any> = (props): any => {
	const Component = props.component
	return [
		<MyShoppingCart key="myCart"/>,
		<Component key='main'{...props} />,
		<ReduxToastr
			key='toastr'
			timeOut={8000}
			newestOnTop={false}
			preventDuplicates={false}
			position='bottom-right'
			transitionIn='fadeIn'
			transitionOut='fadeOut'
			progressBar={false}
		/>
	]
}

interface IAppStore {
	store: any,
	cart: any,
	Component: any
}

export default withRedux(initStore)(
	class MyApp extends App<IAppStore> {
		static async getInitialProps({Component, ctx}: any) {

			return {
				pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
			}
		}

		render() {
			const {Component, pageProps, store} = this.props
			return <Container>
				<Provider store={store}>
					<Wrapper component={Component} {...pageProps} />
				</Provider>
			</Container>
		}
	}
)
