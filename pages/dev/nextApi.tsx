import { FC } from 'react'
import { BASE_URL, API_ROUTE } from "../../constants/settings"
import { getFetch, postFetch } from '../../util/common'
import { get_articles_article_id, get_articles_search, post_articles_article_id_purchase} from '../../util/sample-data'
import Purchase from './purchase'
import SearchArticle from './search_article'

export async function getServerSideProps() {
  const purchaseURL: string = BASE_URL + API_ROUTE.purchase
  // const getArticleURL: string = BASE_URL + API_ROUTE.getArticle + "/1"
  const searchURL: string = BASE_URL + API_ROUTE.search
  
  const purchaseJson = await getFetch(purchaseURL)
  // const getArticlesJson = await getFetch(getArticleURL)
  const searchJson = await getFetch(searchURL)

  const purchase: post_articles_article_id_purchase = await purchaseJson
  // const articles: get_articles_article_id = await getArticlesJson
  const searchList: get_articles_search = await searchJson
  return {
    props: {
      IsSucceeded: purchase.IsSucceeded,
      // articles: articles,
      searchList: searchList,
   }
  }
}

type Props = {
  IsSucceeded: boolean,
  articles: get_articles_article_id,
  searchList: get_articles_search,
}
const nextApi = ({IsSucceeded, articles, searchList}: Props) => {
    return (
        <>
          <div>APIのテスト表示画面</div>
          <Purchase IsSucceeded={IsSucceeded}/>
          {/* <GetArticles articles={articles}/> */}
          <SearchArticle searchList={searchList}/>
        </>
    )
}

export default nextApi
