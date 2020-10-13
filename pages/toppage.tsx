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
          <Link href="/components/dev">
            <a>Dev</a>
          </Link>
      </Button>
        <Button variant="contained">
          <Link href="/components/signup">
          <a>signup</a>
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/components/signout">
          <a>sinout</a>
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/components/login">
          <a>login</a>
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/components/logout">
          <a>logout</a>
          </Link>
        </Button>
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
