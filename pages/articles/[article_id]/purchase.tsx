import { ArticleArticleIdPurchase } from '../../../util/sample-data'
import { Button } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'
import { FC, useState } from 'react'
import { post } from '../../../util/common'
import { BASE_URL } from '../../../util/settings'
import { useRouter } from 'next/router'

export async function getServerSideProps(props: any) {
  return {
      props: {
        BASE_URL
      }
  }
}
const Purchase = (props: any) => {
  const router = useRouter()
  // 深い層でも動的な値は取得できる
  // console.log(router)
  const { article_id } = router.query
  const [isPosted, setIsPosted] = useState(false)
  const handleOnClick = async (e: React.MouseEvent<HTMLElement>) => {
    setIsPosted(!e.currentTarget.getAttribute("disabled"))
  const purchaseURL: string = props.BASE_URL + `/articles/${article_id}/purchase`
  const body = {article_id: article_id}
  const purchase: ArticleArticleIdPurchase = await post(purchaseURL, body)
  return alert(purchase.IsSucceeded)
  };
  // const notion = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e.currentTarget.getAttribute("data-item"));
  //   // ↓これでも書ける
  //   // console.log(e.currentTarget.dataset.item);
  // };
  return (
    <>
    <Button color="secondary"
    variant="contained"
    onClick={handleOnClick}
    size="large"
    disabled={isPosted}
    value="you click botton"
    startIcon={<PublishIcon />}
    >
  購入する </Button>
  </>
  )
}

export default Purchase
