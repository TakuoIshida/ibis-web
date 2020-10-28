import { FC, useState } from 'react'
import { BASE_URL, API_ROUTE } from "../../constants/settings"
import { getFetch, postFetch, getUserToken, isUserLogin } from '../../util/common'
import { get_articles_article_id, get_articles_search, post_articles_article_id_purchase} from '../../util/sample-data'
import Purchase from './purchase'
import SearchArticle from './search_article'
import GetArticle from './get_article'
import { Button } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'
import router from 'next/router'

// iconが多くなる場合は、複数でimportできる
// import { foo, bar } from '@material-ui/icons';
// serversideのみで実行される
export async function getServerSideProps() {
  const purchaseURL: string = BASE_URL + API_ROUTE.purchase
  const getArticleURL: string = BASE_URL + API_ROUTE.getArticle
  const searchURL: string = BASE_URL + API_ROUTE.search
  
  const purchaseJson = await getFetch(purchaseURL)
  const getArticleJson = await getFetch(getArticleURL)
  const searchJson = await getFetch(searchURL)

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
// Build時にクライアントサイドで実行される（Loadingなど、クライアントサイドで実行したいものをいれる。?)
// export const getInitialProps = async () => {
  
// }

type serverProps = {
  IsSucceeded: boolean,
  article: get_articles_article_id,
  searchList: get_articles_search,
}


const nextApi = ({IsSucceeded, article, searchList}: serverProps) => {
  const token = getUserToken()
  const [isPosted, setIsPosted] = useState(false)
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    alert(token)
    console.log(e.currentTarget.getAttribute("value"));
    setIsPosted(!e.currentTarget.getAttribute("disabled"))
    // Loading処理

    
    // POST処理

    // HideLoading処理
    
  };
  // const notion = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e.currentTarget.getAttribute("data-item"));
  //   // ↓これでも書ける
  //   // console.log(e.currentTarget.dataset.item);
  // };
  return (
      <>
        <div>APIのテスト表示画面</div>
        <Purchase IsSucceeded={IsSucceeded}/>
        <GetArticle article={article}/>
        <SearchArticle searchList={searchList}/>
        <Button color="secondary"
                variant="contained"
                onClick={handleOnClick}
                size="large"
                disabled={isPosted}
                value="you click botton"
                startIcon={<PublishIcon />}
                >
              POST </Button>
      </>
  )
}

export default nextApi
