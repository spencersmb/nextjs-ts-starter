import {WindowActionTypes} from '../types/Actions--enums'
import {Actions} from '../types/Actions'

export const changeBreakPoint = (breakPoint: number): Actions => {
	return {
		payload: breakPoint,
		type: WindowActionTypes.CHANGE_BREAKPOINT
	}
}
