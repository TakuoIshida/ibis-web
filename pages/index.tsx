import Link from 'next/link'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import SearchAppBar from '../components/common/AppBar'
import AbstCarousel from './../components/common/Carousel'
const TopPage: NextPage = () => {
  return (
    <div id="index">
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
      <AbstCarousel />
    </div>
  )
}

export default TopPage
