import { FC, useState } from 'react'
import { BASE_URL, API_ROUTE } from "../../util/settings"
import { get, getUserToken, isUserLogin } from '../../util/common'
import { get_articles_article_id, get_articles_search, post_articles_article_id_purchase} from '../../util/sample-data'
import Purchase from './purchase'
import SearchArticle from './search_article'
import GetArticle from './get_article'
import { Button } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'

// serversideのみで実行される
export async function getStaticProps() {
  const purchaseURL: string = BASE_URL + API_ROUTE.purchase
  const getArticleURL: string = BASE_URL + API_ROUTE.getArticle
  const searchURL: string = BASE_URL + API_ROUTE.search
  
  const purchase: post_articles_article_id_purchase = await get(purchaseURL)
  const article: get_articles_article_id = await get(getArticleURL)
  const searchList: get_articles_search = await get(searchURL)

  return {
    props: {
      IsSucceeded: purchase.IsSucceeded,
      article: article,
      searchList: searchList,
   },
   revalidate: 1,
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

// const postArticle = async() => {
//   const postArticleURL: string = BASE_URL + API_ROUTE.postArticle
//   const body = { ID: 1} 
//   await postFetch(postArticleURL, body)
//     .then(
//       (res) => {
//         const article = res
//         return article
//       })
// }

const nextApi = ({IsSucceeded, article, searchList}: serverProps) => {
  const [isPosted, setIsPosted] = useState(false)
  
  const handleOnClick = async (e: React.MouseEvent<HTMLElement>) => {
    setIsPosted(!e.currentTarget.getAttribute("disabled"))
    // TODO: POST処理
    // const article = await postArticle()
    // alert(article)
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
