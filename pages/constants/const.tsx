// 定数を作成、管理する

//   as constによってReadOnlyで型定義できる
// タグ、ジャンル、出版社、エラー、メッセージ
// as const によって、union型で定義した定数にも反復処理ができるようになった。
// https://www.kabuku.co.jp/developers/good-bye-typescript-enum

export const ganre = ['genuine', 'cancer', 'mental', 'health'] as const;
export const publisher = ['cell', 'natureCom', 'mental', 'health'] as const;
type ganre = typeof ganre[number];
type publisher = typeof publisher[number];
