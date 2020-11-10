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


type ganres = typeof ganres[number]
type publishers = typeof publishers[number]

// パンくずリスト
// TODO: 最後に実装
export const routingMapping: routingMappingType = {
    '/': { title: 'トップページ' },
    '/dev': { title: '開発画面' },
    '/dev/next_api': { title: 'API' },
    '/mypage': { title: 'Mypage' },
}

type routingMappingType = { [name: string]: {title: string} }
