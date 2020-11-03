import { firebase } from '../firebase'
import { useContext, useEffect } from 'react'
import { AuthContext } from './auth/Auth'
import router from 'next/router'
import { RedoRounded } from '@material-ui/icons'

export const get = async (url: string) => {
    const data = await fetch(url).then((res) => res.json())
    return data
}
export const post = async (url: string, body: {}) => {
    // 認証チェックのためにTokenをバックエンドに渡す
    const token: string = getUserToken()
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer'+ token
        },
        body: JSON.stringify(body)}
    const data = await fetch(url, params).then((res) => res.json())
    return data
}

// TODO: APIリクエスト時に、Tokenを取得し、現状のTokenと同じか認証する
// 同じでなければ、alertを出して、トップにリダイレクトする

// 外部パッケージでimortした関数はラップする（保守運用上のため）
// TODO: Google認証、各種ユーザー動作のシミュレーションをして、関数をラップ化する

// ユーザーのログインを判断する
export const isUserLogin = () => {
    const { currentUser } = useContext(AuthContext)
    // 開発用にコンソール画面に表示
    console.log("currentUser:", currentUser)
    useEffect(() => {
    // currentUserが明示的にnullの場合はログイン画面へリダイレクト
    currentUser === null && router.push("/")
   }, [currentUser])
}

// POST前にTokenを取得する
export const getUserToken = () => {
    const { currentUser } = useContext(AuthContext)
    useEffect(() => {
    // currentUserが明示的にnullの場合はログイン画面へリダイレクト
    currentUser === null && router.push("/")
    }, [currentUser])
    if (currentUser?.refreshToken){
        return currentUser.refreshToken
    }
    return ""

}

// ユーザー情報を取得する
export const getUserInfo = () => {
    const { currentUser } = useContext(AuthContext)
    useEffect(() => {
    // currentUserが明示的にnullの場合はログイン画面へリダイレクト
    currentUser === null && router.push("/")
    }, [currentUser])
    if (currentUser){
        return currentUser
    }
}

// ページが読み込まれた時に、google認証する（初期ロード）
// export const isOKReloadAuth = firebase.auth().getRedirectResult().then(function(result) {
//     if (result.credential) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       console.log(result.credential)
//     //   var token = result.credential.accessToken;
//       // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   })
