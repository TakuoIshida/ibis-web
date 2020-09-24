// reducersファイルは、発行されたActionを受け取り、
// Switch構文内でaction.typeに応じてStoreにstateを渡します。

// 例）
// import * as Actions from 're-ducks/users/actions';
// import {initialState} from 're-ducks/store/initialState';

// export const UsersReducer = (state = initialState.users, action)  => {
//     switch (action.type) {
//         case Actions.FETCH_USERS:
//             return {
//                 ...state,
//                 users: action.payload
//             };

//         // 中略

//         default:
//             return state
//     }
// };


// import * as Actions from './actions';
// import {counterInitialState} from '../../store/initialState';

// export const reducksCountReducer = (reducksCount = counterInitialState.reducksCount, action)  => {
//     switch (action.type) {
//         case Actions.COUNT_UP:
//             return {
//                 ...state,
//                 reducksCount: action.payload
//             };

//         // 中略

//         default:
//             return state
//     }
// };
import { ActionTypes } from "../../store/ActionTypes";
import { reducksCounter, ReducksCounterActionTypes } from "./Types";

const counterInitialState: reducksCounter  = {
    reducksCount: 0
}

export const ReducksCounterReducer = (state = counterInitialState, action: ReducksCounterActionTypes): reducksCounter => {
    switch (action.type) {
      case ActionTypes.COUNT_DOWN:
        return { reducksCount: state.reducksCount - 1 };
    case ActionTypes.COUNT_UP:
        return { reducksCount: state.reducksCount + 1 };
      default:
        // const _: never = action;
        return state;
    }
  };
