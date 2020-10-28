import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import { Fragment, useContext, useEffect } from "react"
import { AuthContext } from "../components/auth/Auth"
import { firebase } from "../src/firebase"
import router from 'next/router'

const TopPage: NextPage = () => {
  const { currentUser } = useContext(AuthContext)
  console.log("currentUser:", currentUser)
  useEffect(() => {
    // currentUserが明示的にnullの場合はログイン画面へリダイレクト
    currentUser === null && router.push("/login");
   }, [currentUser]);
  return (
    <div id="index">
      <Head>
        <title>This is Toppage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Button variant="contained">
          <Link href="/dev" as ="/dev">
            <a>Dev</a>
          </Link>
      </Button>

      <Button variant="contained">
          <Link href="/dev/next_api">
            <a>API response test</a>
          </Link>
      </Button>
    
      </main>
    </div>
  )
}

export default TopPage
