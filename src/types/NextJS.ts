export interface IWithRouter {
	back: () => void,
	push: () => void,
	asPath: string,
	pathname: string,
	query: {
		slug: string
	},
	route: string
}
