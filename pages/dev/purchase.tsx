import { post_articles_article_id_purchase } from '../../util/sample-data'
// POSTで処理する

const Purchase = ({ IsSucceeded }: post_articles_article_id_purchase) => {
// const Purchase:FC<post_articles_article_id_purchase> = ({ IsSucceeded } ) => {
  return (
    <div>
      <p>購入：{`${IsSucceeded}`}</p>
    </div>
  )
}

export default Purchase
