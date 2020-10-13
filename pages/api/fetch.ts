import axios from 'axios'
import fetch from 'isomorphic-unfetch'

import {settings} from './../constants/settings'

const fetchData = async (url='', params={}, method='GET') => {
    const requestURL = settings.BASE_URL + url
    switch (method) {
        case 'GET':
            return getFetch(requestURL)
        case 'POST':
            return postFetch(requestURL, params, method)
        default:
            // TODO: dataの構造と同じ構造体にしてreturn
            return console.log('fetchData error')
    }
}

export default fetchData

const getFetch = async (requestURL: string) => {
    try{
        const data = await fetch(requestURL)
        return data
    } catch {
        // TODO: dataの構造と同じ構造体にしてreturn
        return console.log('getFetch error')
    }
}

const postFetch = async (requestURL: string, params: any, method: string) => {
    try {
        const data = await fetch(requestURL,{ method: method, body: JSON.stringify(params)})
        return data

    } catch {
        // TODO: dataの構造と同じ構造体にしてreturn
        return console.log('postFetch error')
    }
}

// TODO: try catchは呼び出す側で実装する（問題の発生が具象で完結するから。また、対応しやすい）
// TODO: errorのリターンは、APIの構成に依存する。陸側で考える。→