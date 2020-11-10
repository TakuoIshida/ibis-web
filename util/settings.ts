export const BASE_URL: string = `${process.env.BASE_URL}`

//TODO:  動的なページに対応てきないため各ページに散逸させる
export const API_ROUTE: API_ROUTE = {
    // ArticleRouting
    getArticle: '/articles',
    getArticlesByGenre: '/articles/genre/genrename',
    getArticlesByTag: '/articles/tag/tagname',
    getArticlesByJournal: '/articles/journal/journalname',
    purchaseArticle: '/articles/1/purchase',
    searchArticles: '/articles/search',
} as const

type API_ROUTE = { [name: string]: string }