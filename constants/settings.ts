export const BASE_URL: string | undefined = `${process.env.BASE_URL}/api`

export const API_ROUTE: API_ROUTE = {
    dev: '/dev',
    search: '/article/search',
    purchase: '/article/purchase',
    getArticle: '/article/get_article',
    postArticle: '/article/post_article',
} as const

type API_ROUTE = { [name: string]: string }