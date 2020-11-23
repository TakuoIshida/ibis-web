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

// TODO: id、会員グレードタイトル、画像ID、料金、description
type grade = {
    id: number,
    name: string,
    imageId: number,
    price: string,
    description: string,
}
export const gradeList: grade[] = [
    { id: 1, name: '無料会員', imageId: 1, price: 'Free', description: 'サービス説明1'},
    { id: 2, name: 'シルバー会員', imageId: 2, price: '1000', description: 'サービス説明2'},
    { id: 3, name: 'ゴールド会員', imageId: 3, price: '2000', description: 'サービス説明3'},
]