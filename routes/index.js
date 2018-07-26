/* tslint:disable */
const port = process.env.PORT || 3000

exports.fetchRoutes = (expressServer, app, handle) => {

	expressServer.get('/product/:id', (req, res) => {
		const actualPage = '/products/item'
		const queryParams = {slug: req.params.id}
		console.log('queryParams', queryParams)

		return app.render(req, res, actualPage, queryParams)
	})

	expressServer.get('*', (req, res) => {
		return handle(req, res)
	})

	expressServer.listen(port, err => {
		if (err) throw err
		console.log('> Ready on: ' + port + ' using express')
	})
}
