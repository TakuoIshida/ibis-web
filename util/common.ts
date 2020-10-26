
export const getFetch = async (url: string) => {
    const data = await fetch(url).then((res) => res.json())
    return data
}
export const postFetch = async (url: string, body: {}) => {
    const params = {method: 'POST', body: JSON.stringify(body)}
    const data = await fetch(url, params).then((res) => res.json())
    return data
}

// TODO: APIリクエスト時に、Tokenを取得し、現状のTokenと同じか認証する
// 同じでなければ、alertを出して、トップにリダイレクトする