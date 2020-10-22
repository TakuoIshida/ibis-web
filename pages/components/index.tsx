import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import Login from './auth/login'
import Logout from './auth/logout'
import { NextPage } from 'next'
import {useRouter} from "next/router";
import { firebase } from "../../src/firebase"

const TopPage: NextPage = (props) => {
  firebase.auth().onAuthStateChanged((result) => {
    if(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result)
      const email = result.email
      // The signed-in user info.
      console.log(email)
    }
    })
  return (
    <div id="index">
      <Head>
        <title>This is Toppage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Button variant="contained">
          <Link href="/components/dev" as ="components/dev">
            <a>Dev</a>
          </Link>
      </Button>
        {/* <Button variant="contained">
          <Link href="/components/signup">
          <a>signup</a>
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/components/signout">
          <a>sinout</a>
          </Link>
        </Button> */}

        <Button variant="contained">
          <Link href="/components/mypage">
          <a>mypage</a>
          </Link>
        </Button>

      </main>

    </div>
  )
}

export default TopPage
