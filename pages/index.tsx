import Link from 'next/link'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import AbstCarousel from '../re-ducks/carousel/components/Carousel'
import Devider from '../re-ducks/commons/components/Devider'
import CategoryCardGroup from '../re-ducks/categoryCards/components/CategoryCardGroup'
import Footer from '../re-ducks/commons/components/Footer'

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
      <AbstCarousel />
      <Devider />
      <CategoryCardGroup />
      <Devider />
      <Footer />
    </div>
  )
}

export default TopPage
