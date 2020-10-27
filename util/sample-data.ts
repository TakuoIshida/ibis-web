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

// get-articles-article-id
// 記事を取得する
// path: /articles/{article_id}
// 200 or 404
export const get_articles_article_id = {
    "Abstract": "abstractabstractabstractabstractabstractabstractabstractabstractabstractabstractabstractabstractabstract",
    "Authors": [
        "nakazumi", "yagi", "maeda"
        ],
    "Category": "bio science",
    "ID": 1,
    "IsOpenAccess": true,
    "IsPayArticle": true,
    "IsReadable": true,
    "OriginalURL": "https://OriginalURL",
    "PublishDate": "2020-10-26",
    "Publisher": "I am a publisher.",
    "Tags": [
    "tag1", "tag2"
    ],
    "Title": "this is title"
}

export type get_articles_article_id = {
    Abstract: string,
    Authors: string[],
    Category: string,
    ID: number,
    IsOpenAccess: boolean,
    IsPayArticle: boolean,
    IsReadable: boolean,
    OriginakURL: string,
    PublishDate: string,
    Publisher: string,
    Tags: string[],
    Title: string
}

// post-articles-article-id-purchase
// 記事を購入する
// path: /articles/{article_id}/purchase
// 200 404 401 Unauthorized
export const post_articles_article_id_purchase = {
    "IsSucceeded": true
}

export type post_articles_article_id_purchase ={ 
    IsSucceeded: boolean
}

// get-articles-search
// 記事を検索する
// path: /articles/search
// 200
export const get_articles_search = [
    {
      "Abstract": "string",
      "Authors": [
        "string"
      ],
      "Category": "string",
      "ID": 1,
      "IsOpenAccess": true,
      "IsPayArticle": true,
      "IsReadable": true,
      "OriginalURL": "string",
      "PublishDate": "string",
      "Publisher": "string",
      "Tags": [
        "string"
      ],
      "Title": "string"
    },
    {
      "Abstract": "string2",
      "Authors": [
        "string2"
      ],
      "Category": "string2",
      "ID": 2,
      "IsOpenAccess": false,
      "IsPayArticle": true,
      "IsReadable": false,
      "OriginalURL": "string2",
      "PublishDate": "string2",
      "Publisher": "string2",
      "Tags": [
        "string2"
      ],
      "Title": "string2"
    }
]

export type get_articles_search = [
    {
        Abstract: string,
      Authors: [
        string
      ],
      Category: string,
      ID: 0,
      IsOpenAccess: boolean,
      IsPayArticle: boolean,
      IsReadable: boolean,
      OriginalURL: string,
      PublishDate: string,
      Publisher: string,
      Tags: [
        string
      ],
      Title: string
    }
]

// authはgoogle認証で実装済み
