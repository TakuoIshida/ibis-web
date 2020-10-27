import { FC } from 'react'
import { BASE_URL, API_ROUTE } from "../../constants/settings"
import { getFetch, postFetch } from '../../util/common'
import { get_articles_article_id, get_articles_search, post_articles_article_id_purchase} from '../../util/sample-data'
import Purchase from './purchase'
import SearchArticle from './search_article'
import GetArticle from './get_article'

export async function getServerSideProps() {
  const purchaseURL: string = BASE_URL + API_ROUTE.purchase
  const getArticleURL: string = BASE_URL + API_ROUTE.getArticle
  console.log(getArticleURL)
  const searchURL: string = BASE_URL + API_ROUTE.search
  
  const purchaseJson = await getFetch(purchaseURL)
  // TODO: 画面遷移時に値をどう渡すか？(多分、next/router)
  const body = {
    ID: 1
  }
  const getArticleJson = await postFetch(getArticleURL, body)
  const searchJson = await getFetch(searchURL)
  console.log(getArticleJson)

  const purchase: post_articles_article_id_purchase = await purchaseJson
  const article: get_articles_article_id = await getArticleJson
  const searchList: get_articles_search = await searchJson

  return {
    props: {
      IsSucceeded: purchase.IsSucceeded,
      article: article,
      searchList: searchList,
   }
  }
}

type Props = {
  IsSucceeded: boolean,
  article: get_articles_article_id,
  searchList: get_articles_search,
}
const nextApi = ({IsSucceeded, article, searchList}: Props) => {
    return (
        <>
          <div>APIのテスト表示画面</div>
          <Purchase IsSucceeded={IsSucceeded}/>
          <GetArticle article={article}/>
          <SearchArticle searchList={searchList}/>
        </>
    )
}

export default nextApi
