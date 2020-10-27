import { NextApiRequest, NextApiResponse } from 'next'
import { post_articles_article_id_purchase } from '../../../util/sample-data'

export default function purchase(_req: NextApiRequest, res: NextApiResponse) {
    try {
    res.status(200).json(post_articles_article_id_purchase)
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
