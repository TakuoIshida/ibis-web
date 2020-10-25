import { firebase } from '../../src/firebase'
import { useState } from 'react'
import router from 'next/router'

const index = () => {
  
  const [email, setEmail] = useState("")
  firebase.auth().onAuthStateChanged((result) => {
    if(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result.email)
      if (typeof result.email == "string"){
        setEmail(result.email)
      }
      // The signed-in user info.
    } else {
      router.push('/dev')
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
