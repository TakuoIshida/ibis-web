import { Action } from "redux"
import { ActionTypes } from "./actionTypes"
// 立ち位置：TypeScriptで記述する場合に使うファイルです。
// 使い方：action, operation, reducerなどで使う型を定義しておきます。

// stateの型
// キーは文字列、そのほかは入った型を定義する
export type  reducksCounterState = {
    reducksCount: number
}

// Actionの型 Actionを継承
interface CountUpAction extends Action {
    type: typeof ActionTypes.COUNT_UP;
    payload: number;
}
interface CountDownAction extends Action {
    type: typeof ActionTypes.COUNT_DOWN;
    payload: number;

}
// exportするActionの型：UnionType
export type ReducksCounterActionTypes = CountDownAction | CountUpAction