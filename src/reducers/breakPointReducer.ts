import initialState from './initialState'
import {Actions} from '../types/Actions'
import {WindowActionTypes} from '../types/Actions--enums'

export const breakPointReducer = (state: number = initialState.breakPoint, action: Actions): number => {
	switch (action.type) {

		case WindowActionTypes.CHANGE_BREAKPOINT:
			return action.payload

		default:
			return state
	}
}
