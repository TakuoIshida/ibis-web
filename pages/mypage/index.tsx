import { firebase } from '../../src/firebase'
import { useState } from 'react'
import router from 'next/router'
import { isUserLogin } from '../../util/common'

const index = () => {
  const [email, setEmail] = useState("")
  if (!isUserLogin()) {
    router.push('/')
  }
  // TODO: useeffectで更新回数を減らす
  firebase.auth().onAuthStateChanged((result) => {
    if(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      if (typeof result.email == "string"){
        setEmail(result.email)
      }
      // The signed-in user info.
    } else {
      alert('dev画面で認証してください')
      router.push('/')
    }
  })
  return (
  <>
    <p>mypage画面</p>
    <div>your email: {email}</div>
  </>
  )
}

export default index
