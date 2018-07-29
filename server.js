/* tslint:disable */
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
	dev
})
const handle = app.getRequestHandler()
const routes = require('./routes')
const expressServer = express()
const bodyParser = require('body-parser') // turns the body into json object
app.prepare()
	.then(() => {
		expressServer.use(bodyParser.json())
		routes.fetchRoutes(expressServer, app, handle)
		// server.get('/product/:id', (req, res) => {
		// 	const actualPage = '/products/product'
		// 	const queryParams = {slug: req.params.id}
		// 	app.render(req, res, actualPage, queryParams)
		// })

		// server.get('*', (req, res) => {
		// 	return handle(req, res)
		// })

		// server.listen(3000, (err) => {
		// 	if (err) throw err
		// 	console.log('> Ready on http://localhost:3000')
		// })
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})
