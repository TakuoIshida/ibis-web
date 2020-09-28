import { ActionTypes } from '../../store/actionTypes'
import { ReducksCounterActionTypes } from './types'
// actionsファイルには、純粋にRedux Actionのみを記述します。

export const reducksCountUp = (reducksCount: number): ReducksCounterActionTypes => {
    return {
        type: ActionTypes.COUNT_UP,
        payload: reducksCount
    }
};
export const reducksCountDown = (reducksCount: number): ReducksCounterActionTypes => {
    return {
        type: ActionTypes.COUNT_DOWN,
        payload: reducksCount
    }
};
