import Link from 'next/link'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import AbstCarousel from '../re-ducks/carousel/components/Carousel'
import Devider from '../re-ducks/commons/components/Devider'
import CategoryCardGroup from '../re-ducks/categoryCards/components/CategoryCardGroup'
import Footer from '../re-ducks/commons/components/Footer'

const TopPage: NextPage = () => {

  return (
    // TODO: login認証後のstripe決済情報の同期
    // １ フロント：Login時に、/api/v1/にユーザーのemaliをバックエンドに投げる
    // ２ バック：リクエストを受けて、stripeにユーザーemailがあるか確認する
    // ３ バック：ユーザーがあれば、そのまま取得する。なければ作成して、customer情報をフロントに返す
    // ４ フロント：ユーザーのcustomer情報（主に、id, token）を取得し、状態として保持する

    // TODO: 有料会員登録前の処理
    // サービスページで、有料会員を選択した際に、Loginへ飛ばす
    
    <div id="index">
      <Button variant="contained">
          <Link href="/dev">
            Dev
          </Link>
      </Button>

      <Button variant="contained">
          <Link href="/dev/next_api">
            Next.js API res test
          </Link>
      </Button>

      <Button variant="contained">
          <Link href="/ssg">
          SSG test
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
