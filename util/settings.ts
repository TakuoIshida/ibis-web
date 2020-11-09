export const BASE_URL: string = `${process.env.BASE_URL}`

export const API_ROUTE: API_ROUTE = {
    dev: '/dev',
    search: '/article/search',
    purchase: '/article/purchase',
    postArticle: '/article/post_article',
    // ArticleRouting
    getArticle: '/articles',
    getArticlesByGenre: '/genre/genrename',
    getArticlesByTag: '/tag/tagname',
    getArticlesByJournal: '/journal/journalname',
    purchaseArticle: '/article-id/purchase',
    searchArticles: '/search',
} as const

type API_ROUTE = { [name: string]: string }