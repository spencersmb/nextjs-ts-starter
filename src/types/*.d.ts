declare module '*.json' {
	const config: {
		DEV_URL: string,
		TEST_URL: string,
		PROD_URL: string,
		STRIPE_LIVE_KEY: string,
		STRIPE_TEST_KEY: string,
	}
	export default config
}
declare module 'json!*' {
	const config: {
		DEV_URL: string
	}
	export default config
}
