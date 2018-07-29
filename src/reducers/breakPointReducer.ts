import initialState from './initialState'
import {Actions} from '@et/types/Actions'
import {WindowActionTypes} from '@et/types/Actions--enums'

export const breakPointReducer = (state: number = initialState.breakPoint, action: Actions): number => {
	switch (action.type) {

		case WindowActionTypes.CHANGE_BREAKPOINT:
			return action.payload

		default:
			return state
	}
}
