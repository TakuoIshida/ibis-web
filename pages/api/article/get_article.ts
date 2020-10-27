import { NextApiRequest, NextApiResponse } from 'next'
import { get_articles_article_id } from '../../../util/sample-data'
import { useRouter } from 'next/router'

export default function get_article(_req: NextApiRequest, res: NextApiResponse) {
    try {
    if(_req.method != "POST") return
    // TODO: APIテスト用に残す
    // if (!Array.isArray(sampleData)) {
    //     throw new Error('Cannot find user data')
    // }
    console.log("you can read the requested body in terminal", _req.body)
    // IDに一致した記事を辞書型で返す→Golang側で実装
    // if (articleId && articleId == get_articles_article_id.ID){
        // console.log(get_articles_article_id)
        res.status(200).json(get_articles_article_id)
    // }
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
