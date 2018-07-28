import * as React from 'react'
import Link from 'next/link'
import {IProduct} from '../../../types/Products'

interface IProps extends IProduct {
	index: number
}

// Possible convert to SFC
export class ProductItem extends React.Component<IProps> {
	clickme() {
		console.log('click me')
	}

	render() {
		console.log('this.props', this.props)

		return (
			<div>
				<div>{this.props.name}
				</div>
				<Link as={`/product/${this.props.slug}`} href={`/products/item?slug=${this.props.slug}`}>
					<a>View product</a>
				</Link>
				<div onClick={this.clickme}>CLick</div>
			</div>
		)
	}
}

export default ProductItem
