import React from 'react'
import Document, {Main, NextScript} from 'next/document'
import Head from '@et/header'
import {ServerStyleSheet} from 'styled-components'
import '../src/styles/base/global'

export default class MyDocument extends Document {
	render() {
		const sheet = new ServerStyleSheet()
		const main = sheet.collectStyles(<Main/>)
		const styleTags = sheet.getStyleElement()
		return (
			<html lang='en'>
			<Head title='Example Website title'>
				<script id="stripe-js" src="https://js.stripe.com/v3/" async={true}/>
				<link href='/static/styles/toastr.min.css' rel='stylesheet' type='text/css'/>
				{styleTags}
			</Head>
			<body id='body'>
			{main}
			<NextScript/>
			</body>
			</html>
		)
	}
}
