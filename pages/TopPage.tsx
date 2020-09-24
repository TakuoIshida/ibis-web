import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Button from '@material-ui/core/Button'

const TopPage = () => {

  return (
    <div id="index">
      <Head>
        <title>This is Toppage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Button variant="contained">
          <Link href="/component/Dev">
            <a>Dev</a>
          </Link>
      </Button>
        <Button variant="contained">
          <Link href="/component/signup">
          <a>signup</a>
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/component/sinout">
          <a>sinout</a>
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/component/login">
          <a>login</a>
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/component/logout">
          <a>logout</a>
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/component/mypage">
          <a>mypage</a>
          </Link>
        </Button>
      </main>

    </div>
  )
}

export default TopPage
