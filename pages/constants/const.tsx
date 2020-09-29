// 定数を作成、管理する

//   as constによってReadOnlyで型定義できる
// タグ、ジャンル、出版社、エラー、メッセージ
// as const によって、union型で定義した定数にも反復処理ができるようになった。
// https://www.kabuku.co.jp/developers/good-bye-typescript-enum
export const publishers = [
    'ScientificData',
    'CellReports',
    'iScience'
] as const

export const ganres = [
    'virus',
    'health',
    'regenerative_medicine',
    'cancer'
] as const


type ganres = typeof ganres[number];
type publishers = typeof publishers[number];
