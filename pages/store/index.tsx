import { combineReducers, createStore } from 'redux'

import { ReducksCounterReducer } from '../components/dev/reducers'

// storeの本体
// Reducerを増やすときはここに記載する
const rootReducer = combineReducers({
    reducksCount: ReducksCounterReducer
})

// states type
export type RootState = ReturnType<typeof rootReducer> // ReturnType<typeof fn>は、fnの返り値の型

// store
const store = createStore(rootReducer)

export default store