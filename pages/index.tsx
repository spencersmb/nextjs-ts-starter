import Link from 'next/link'
import {MyShoppingCart} from '../src/components/cart/myCart'

export default () =>
	<div>
		Hello World.{' '}
		<Link href="/about">
			<a>About</a>
		</Link>
		<MyShoppingCart cart={{}}/>
	</div>
