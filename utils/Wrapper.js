import React, { Component } from 'react'

const {Provider} = require('react-redux')
const {initStore} = require('../../store')
// import {Provider} from 'react-redux'
// import {initStore} from '../store'

const store = initStore()

// Wrap all components for Styleguidist with a provider for Redux
export default class Wrapper extends Component {
	render () {
		return (
			<Provider store={store}>{this.props.children}</Provider>
		)
	}
}
