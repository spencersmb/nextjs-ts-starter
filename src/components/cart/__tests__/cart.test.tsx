import {shallow} from 'enzyme'
import * as React from 'react'
import * as sinon from 'sinon'
import ListItem from '@et/products/listItem'
import {SinonStub} from 'sinon'

const handleClickSpy: SinonStub = sinon.stub()
const product = {
	acf: {
		extendedLicense: {
			isExtended: 'false',
			item: 'ext-item'
		}
	},
	categories: [
		{
			id: 18,
			name: 'cat1',
			slug: 'cat-1'
		}
	],
	description: 'description',
	id: 99,
	images: [
		{
			alt: 'image-alt',
			id: 21,
			name: 'image-name',
			src: 'src',
		}
	],
	name: 'test',
	price: '24',
	sale_price: '22',
	short_description: 'short desc',
	slug: 'item-slug',
	tags: [
		{
			id: 20,
			name: 'tag1',
			slug: 'tag-1'
		}
	]
}
const setup = () => {
	return shallow(<ListItem index={0} {...product}/>)
}

describe('Button Component', () => {
		let wrapperShallow: any = ''

		beforeEach(() => {
			wrapperShallow = setup()
		})

		afterEach(() => {
			handleClickSpy.reset()
		})

		it('should render with correct text', () => {
			expect(wrapperShallow.length).toBe(1)
		})
	}
)
