import { NextApiRequest, NextApiResponse } from 'next'
import { get_articles_article_id } from '../../../util/sample-data'

export default function get_article(_req: NextApiRequest, res: NextApiResponse) {
    try {
    // TODO: APIテスト用に残す
    // if (!Array.isArray(sampleData)) {
    //     throw new Error('Cannot find user data')
    // }
        res.status(200).json(get_articles_article_id)
    // }
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
