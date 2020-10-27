import { NextApiRequest, NextApiResponse } from 'next'
import { get_articles_search } from '../../../util/sample-data'

export default function search(_req: NextApiRequest, res: NextApiResponse) {
    try {
    // if (!Array.isArray(sampleData)) {
    //     throw new Error('Cannot find user data')
    // }
    console.log(get_articles_search)
    res.status(200).json(get_articles_search)
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
