import { FC, useEffect, useContext } from 'react'
import Router from 'next/router'
import { AuthContext } from './Auth'
import { Button } from '@material-ui/core'
import { popupLogin } from '../function'

export const Login: FC = () => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    // TODO: redilect to top page
    currentUser && Router.push('/dev')
  }, [currentUser])

  return (
    <>
     <Button onClick={popupLogin} variant="contained" color="secondary">
      <img src="/img/google_logo.png" className="sns-icon" alt="Googleロゴ" width="20px" height="20px"/>
      <span>Login</span>
     </Button>
    </>
  )
}