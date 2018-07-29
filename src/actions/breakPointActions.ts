import {WindowActionTypes} from '@et/types/Actions--enums'
import {Actions} from '@et/types/Actions'

export const changeBreakPoint = (breakPoint: number): Actions => {
	return {
		payload: breakPoint,
		type: WindowActionTypes.CHANGE_BREAKPOINT
	}
}
