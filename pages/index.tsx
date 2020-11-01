import Link from 'next/link'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import SearchAppBar from '../components/organisms/AppBar'
import AbstCarousel from '../components/organisms/Carousel'
import Devider from '../components/atoms/Devider'
import CategoryCardGroup from '../components/organisms/CategoryCardGroup'
import Footer from '../components/common/Footer'

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
      <CategoryCardGroup />
      <Devider />
      <Footer />
    </div>
  )
}

export default TopPage
