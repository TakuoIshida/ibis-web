// 設定関係の値を管理する
// TODO：バックエンドのAPIに変更する
export const BASE_URL: string = 'http://localhost:3000/api' as const
    // ここにdomainの続きを書く？
    // BASE_URL : 'https://api.github.com/repos/zeit/next.js',

export const API_ROUTE: API_ROUTE = {
    dev: "/dev",
} as const

type API_ROUTE = {
    dev: string,
}