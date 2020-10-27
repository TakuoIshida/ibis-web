import { firebase } from '../../src/firebase'
import { Props, useState } from 'react'
import router from 'next/router'
import { isUserHasToken } from '../../util/common'

export async function getServerSideProps() {
  // 画面遷移時に認証を行う
  if (!isUserHasToken) {
  alert('dev画面で認証してください')
  router.push('/dev')
  return { props: {
      isUserHasToken: true
    }}
  } else {
    return { props: {
      isUserHasToken: false
    }}
  }
}
type tokenProps ={
  isUserHasToken: boolean
}

const index = ({isUserHasToken}: tokenProps) => {
  const [email, setEmail] = useState("")
  firebase.auth().onAuthStateChanged((result) => {
    if(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      if (typeof result.email == "string"){
        setEmail(result.email)
      }
      // The signed-in user info.
    } else {
      alert('dev画面で認証してください')
      router.push('/dev')
    }
  })
  return (
  <>
    <p>mypage画面</p>
    <div>your email: {email}</div>
    <div>your token: {`${isUserHasToken}`}</div>
  </>
  )
}

export default index
