import Link from 'next/link'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import SearchAppBar from '../components/common/AppBar'

const TopPage: NextPage = () => {
  return (
    <div id="index">
      <main>
      <Button variant="contained">
          <Link href="/dev">
            <a>Dev</a>
          </Link>
      </Button>

      <Button variant="contained">
          <Link href="/dev/next_api">
            <a>API response test</a>
          </Link>
      </Button>
      <SearchAppBar />
    
      </main>
    </div>
  )
}

export default TopPage
