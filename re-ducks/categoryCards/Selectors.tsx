// 立ち位置：stateの加工を行い、viewのindexに表示するものに絞る
// 使い方：stateの配列、辞書の加工を行い、useSelectで返す

// import { createSelector } from "reselect";
// import State from 're-ducks/store/types'

// const usersSelector = (state: State) => state.users;

// export const getUserId = createSelector(
//     [usersSelector],
//     state => state.uid
// );
import { RootState } from '../../store/dev'
import { createSelector } from "reselect";

// useSelector Hook: storeの中から必要なstateだけを抽出する
const currentCountSelector = (state: any) => state.reducksCount;


export const getReducksCounter = createSelector(
    [currentCountSelector],
    state => state.reducksCount
);


import { useSelector } from 'react-redux';

export const ReducksCounter: React.FC = () => {
  // storeからstateを取得する
  // rootReducer.counterにcountReducerを指定したので、以下のようにする。
  // currentCountはCount型のオブジェクト
  const currentCount = useSelector((state: RootState) => state.reducksCount);
  return <div>{currentCount}</div>;
};