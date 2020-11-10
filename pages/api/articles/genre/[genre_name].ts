import { NextApiRequest, NextApiResponse } from 'next'
import { article_ganre_name } from '../../../../util/sample-data'

export default function genre_name(_req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json(article_ganre_name)
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
