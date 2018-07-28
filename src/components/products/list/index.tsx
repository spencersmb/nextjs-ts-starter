import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductItem from '../listItem'
import {IProductState} from '../../../types/Products'
import {IState} from '../../../types/Redux'

interface IProps {
	products: IProductState
}

export class ShoppeProductsList extends Component<IProps> {
	render(): JSX.Element {
		const {products} = this.props
		const productsKeyArray: string[] = Object.keys(products.list)
		if (products.error) {
			return (
				<div>error</div>
			)
		} else {
			return (
				<div>
					{productsKeyArray
					// filter out extended products
						.filter(item => products.list[item].acf.extendedLicense.isExtended === 'false')
						.map((itemKey, index) =>
							<ProductItem index={index} key={products.list[itemKey].id} {...products.list[itemKey]}/>
						)}
				</div>
			)
		}
	}
}

const mapStateToProps = (state: IState): any => {
	return {
		products: state.products
	}
}

export default connect<IProps>(mapStateToProps)(ShoppeProductsList)
