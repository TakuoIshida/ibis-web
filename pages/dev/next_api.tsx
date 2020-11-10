import Link from 'next/link'
import { Button } from '@material-ui/core'

const nextApi = () => {
  
  return (
      <>
        <div>APIのテスト表示画面</div>
        <Button variant="contained">
          {/* article_id = 1 */}
          <Link href="/articles/1">
            記事詳細
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/articles/genre/genrename">
            ジャンル別の記事一覧
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/articles/tag/tagname">
            タグ別の記事一覧
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/articles/journal/journalname">
            ジャーナル別の記事一覧
          </Link>
        </Button>
        <Button variant="contained">
          {/* article_id = 1 */}
          <Link href="/articles/1/purchase">
            記事の購入ページ（POST）
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/articles/search">
            検索
          </Link>
        </Button>
      </>
  )
}

export default nextApi
