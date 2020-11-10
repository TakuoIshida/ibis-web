import { NextApiRequest, NextApiResponse } from 'next'
import { articles_tag_tag_name } from '../../../../util/sample-data'

export default function tag_name(_req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json(articles_tag_tag_name)
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
