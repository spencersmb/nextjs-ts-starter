const prod = process.env.NODE_ENV
import config from './config.json'

let URL
if (prod === 'production') {
	URL = config.PROD_URL
} else if (prod === 'test') {
	URL = config.TEST_URL
} else {
	URL = config.DEV_URL
}

export const env = {
	BACKEND_URL: URL,
	STRIPE_KEY: prod ? config.STRIPE_LIVE_KEY : config.STRIPE_TEST_KEY,
	WEBSITE_TITLE: 'Now Thats Delicious!',
}

// exports.envConfig = env
