
import { firebase } from '../src/firebase'
import router from 'next/router'
import next from 'next'

export const getFetch = async (url: string) => {
    const data = await fetch(url).then((res) => res.json())
    return data
}
export const postFetch = async (url: string, body: {}) => {
    // 認証チェック
    // if (!isTokenValid) return
    const params = {method: 'POST', body: JSON.stringify(body)}
    const data = await fetch(url, params).then((res) => res.json())
    return data
}

// TODO: APIリクエスト時に、Tokenを取得し、現状のTokenと同じか認証する
// 同じでなければ、alertを出して、トップにリダイレクトする

// 外部パッケージでimortした関数はラップする（保守運用上のため）
// TODO: Google認証、各種ユーザー動作のシミュレーションをして、関数をラップ化する
export const isUserHasToken = async () => {
    try{
        // 現在ログインしているユーザのTokenをリフレッシュ（forceRefresh）して取得する
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user?.refreshToken)
            return (user? true : false)   
        })
       } catch (err){
        console.log(err)
        console.log("Did not have any token")
        return false
       }    
}

// ページが読み込まれた時に、google認証する
export const isOKReloadAuth = firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result.credential)
    //   var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  })
