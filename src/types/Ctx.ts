import {IReduxStore} from './Redux'

export interface ICtx {
	isServer: boolean,
	pathname: string,
	query: any,
	store: IReduxStore,
	req: any,
	res: any
}
