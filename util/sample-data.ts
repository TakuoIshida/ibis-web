export const sampleData = {
    stars: 100,
    archived: true,
    description: "you got data",
    dev: {
        checkbox: true,
        textbox: "write here",
    },
  } as const;

export type sampleData = {
stars: number,
archived: boolean,
description: string,
dev: {
    checkbox: boolean;
    // ?は存在すれば受け取る。
    // textbox?: string;
    textbox: string;
},
// error response
statusCode?: number,
message?: string
};

export type ArticlesArticleId = {
  ID: number,
  Title: string
  Authors: string[],
  Journal: string,
  PublishDate: string,
  Abstract: string,
  Genre: string,
  Tags: string[],
  OriginalURL: string,
  IsOpenAccess: boolean,
  IsPayArticle: boolean,
  IsReadable: boolean,
}
export type ArticleList = ArticlesArticleId[]

export type ArticleArticleIdPurchase = {
IsSucceeded: boolean
}
// 記事を取得する
// getArticle: '/articles/:id',
export const articles_article_id: ArticlesArticleId = {
  "ID": 1,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
}

// /articles/genre/genrename
// ganreごとの記事一覧
export const article_ganre_name: ArticleList = [
  {
  "ID": 1,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
  },
  {
  "ID": 2,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
  }
]

// /tag/tagname
export const articles_tag_tag_name: ArticleList = [
  {
  "ID": 1,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
  },
  {
  "ID": 2,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
  }
]

// /articles/journal/journalname
export const articles_journal_journalname: ArticleList = [
  {
  "ID": 1,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
  },
  {
  "ID": 2,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
  }
]

// /articles/article-id/purchase
export const article_article_id_purchase: ArticleArticleIdPurchase = {
  IsSucceeded: true
}

// /search?keyword=test
export const articles_search: ArticleList = [
  {
  "ID": 1,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
  },
  {
  "ID": 2,
  "Title": "title",
  "Authors": [
  "author1",
  "author2",
  "author3"
  ],
  "Journal": "Nature Communications",
  "PublishDate": "2020-08-21",
  "Abstract": "abstract body",
  "Genre": "医学",
  "Tags": [
  "コロナ"
  ],
  "OriginalURL": "https://www.nature.com/articles/s41467-020-18077-5",
  "IsOpenAccess": true,
  "IsPayArticle": false,
  "IsReadable": false
  }
]

