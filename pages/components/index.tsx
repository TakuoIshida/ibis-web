import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import Login from './auth/login'
import Logout from './auth/logout'
import { NextPage } from 'next'
import {useRouter} from "next/router";

const TopPage: NextPage = () => {
  
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
    
      <Button variant="contained">
        <Link href="/components/mypage" as ="components/mypage">
        <a>mypage</a>
        </Link>
      </Button>
      </main>
    </div>
  )
}

export default TopPage
