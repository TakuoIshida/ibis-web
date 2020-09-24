import { ActionTypes } from '../../store/ActionTypes'
import { ReducksCounterActionTypes } from './Types'
// actionsファイルには、純粋にRedux Actionのみを記述します。

export const reducksCountUp = (reducksCount: number): ReducksCounterActionTypes => {
    return {
        type: ActionTypes.COUNT_UP,
        payload: reducksCount
    }
};
export const reducksCountDwon = (reducksCount: number): ReducksCounterActionTypes => {
    return {
        type: ActionTypes.COUNT_DOWN,
        payload: reducksCount
    }
};
