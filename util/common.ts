import { auth, googleProvider } from '../firebase'
import { useContext, useEffect } from 'react'
import { AuthContext } from './auth/Auth'
import router from 'next/router'
// Rules: 外部パッケージでimortした関数はラップする（保守運用上のため）

export const get = async (url: string) => {
    const data = await fetch(url).then((res) => res.json())
    return data
}

export const post = async (url: string, body?: {}) => {
    // TODO:toekn認証
    // 認証チェックのためにTokenをバックエンドに渡す
    // const token: string = getUserToken()
    const params = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        // 'authorization': 'Bearer'+ token
        },
        body: JSON.stringify(body)
    }
    const data = await fetch(url, params).then((res) => res.json())
    return data
}

// TODO: APIリクエスト時に、Tokenを取得し、現状のTokenと同じか認証する
// 同じでなければ、alertを出して、トップにリダイレクトする


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

// popup login
export const popupLogin = () => {
    auth.signInWithPopup(googleProvider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        if(result.user) {
            router.push("/")
        }
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log(error)
        alert("redilect to top")
        router.push("/")
      });
}

export const login = () => {
    auth.signInWithPopup(googleProvider)
}

export const logout = () => {
    auth
      .signOut()
      .then(() => {
        alert("Logout successful")
        router.push('/')
      })
      .catch((err) => {
        alert("OOps something went wrong check your console")
        console.log(err)
      })
  }

// google 新規作成
// Loginボタンをおした時点で、ユーザーがGoogleアカウントを持っていなければ、新規作成にリダイレクトさせる
// Loginの実装で、Google側で対応されている。（動作確認済み）
  
// google認証後、ユーザーを切り替えるため、Back→再認証→エラー
// TODO: The requested action is invalid 

// 