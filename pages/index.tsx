import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { NextPage } from 'next'

const TopPage: NextPage = () => {
  
  return (
    <div id="index">
      <Head>
        <title>This is Toppage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Button variant="contained">
          <Link href="/dev" as ="/development">
            <a>Dev</a>
          </Link>
      </Button>

      <Button variant="contained">
          <Link href="/dev/nextApi">
            <a>API response test</a>
          </Link>
      </Button>
    
      </main>
    </div>
  )
}

export default TopPage
