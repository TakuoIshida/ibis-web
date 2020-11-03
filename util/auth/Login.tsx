import { FC, useEffect, useContext } from 'react'
import Router from 'next/router'
import { firebase } from '../../firebase'
import { AuthContext } from './Auth'
import { Button } from '@material-ui/core'

export const Login: FC = () => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    // TODO: redilect to top page
    currentUser && Router.push('/dev')
  }, [currentUser])

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
  return (
     <Button onClick={login} variant="contained" color="secondary">
      <img src="/img/google_logo.png" className="sns-icon" alt="Googleロゴ" width="20px" height="20px"/>
      <span>ログイン</span>
     </Button>
  )
}