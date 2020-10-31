import Link from 'next/link'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import SearchAppBar from '../components/common/AppBar'
import AbstCarousel from './../components/common/Carousel'
import styles from '../public/styles/_index.module.scss'
import Devider from '../components/common/Devider'

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
      <Devider />
    </div>
  )
}

export default TopPage
