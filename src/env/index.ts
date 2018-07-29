const prod = process.env.NODE_ENV
import env from './config.json'

let URL
if (prod === 'production') {
	URL = env.PROD_URL
} else if (prod === 'test') {
	URL = env.TEST_URL
} else {
	URL = env.DEV_URL
}

export const config = {
	BACKEND_URL: URL,
	STRIPE_KEY: prod ? env.STRIPE_LIVE_KEY : env.STRIPE_TEST_KEY,
	WEBSITE_TITLE: 'Now Thats Delicious!',
}
