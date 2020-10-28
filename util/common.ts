import { firebase } from '../src/firebase'

export const getFetch = async (url: string) => {
    const data = await fetch(url).then((res) => res.json())
    return data
}
export const postFetch = async (url: string, body: {}) => {
    // 認証チェックのためにTokenをバックエンドに渡す
    const token = await getUserToken()
    console.log("postFetch", token)
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
export const isUserLogin = async () => {
    try{
        // 現在ログインしているユーザのTokenをリフレッシュ（forceRefresh）して取得する
        await firebase.auth().onAuthStateChanged((user) => {
            if(user){
                console.log("logined")
                return true
            }
            console.log("login failed")
            return false   
        })
       } catch (err){
        console.log(err)
        console.log("Did not have any token")
        return false
       }    
}

// POST前にTokenを取得する
export const getUserToken = async () => {
        // 現在ログインしているユーザのTokenをリフレッシュ（forceRefresh）して取得する
        await firebase.auth().onAuthStateChanged((user) => {
            if(user){
            const token = user.refreshToken 
            return token
        }
        })
}

// ユーザー情報を取得する


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
