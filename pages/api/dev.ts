import { NextApiRequest, NextApiResponse } from 'next'
import { sampleData } from '../../util/sample-data'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
    // if (!Array.isArray(sampleData)) {
    //     throw new Error('Cannot find user data')
    // }

    res.status(200).json(sampleData)
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
