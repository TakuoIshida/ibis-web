import { NextApiRequest, NextApiResponse } from 'next'
import { articles_article_id } from '../../../../util/sample-data'

export default function index(_req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json(articles_article_id)
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
