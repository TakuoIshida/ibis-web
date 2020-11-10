import { NextApiRequest, NextApiResponse } from 'next'
import { articles_journal_journalname } from '../../../../util/sample-data'

export default function journal_name(_req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json(articles_journal_journalname)
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
