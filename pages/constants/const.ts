// 定数を作成、管理する
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
