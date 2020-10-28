import { NextApiRequest, NextApiResponse } from 'next'
import { get_articles_article_id } from '../../../util/sample-data'

export default function post_article(_req: NextApiRequest, res: NextApiResponse) {
    try {
    console.log(_req)
    if(_req.method != "POST") return
    // if(_req.headers.authorization) return
    // if(typeof _req.headers.authorization != "string") return
    // TODO: APIテスト用に残す
    // if (!Array.isArray(sampleData)) {
    //     throw new Error('Cannot find user data')
    // }
    // IDに一致した記事を辞書型で返す→Golang側で実装
        res.status(200).json(get_articles_article_id)
    // }
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
