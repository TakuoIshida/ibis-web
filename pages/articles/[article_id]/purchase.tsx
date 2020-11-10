import { ArticleArticleIdPurchase } from '../../../util/sample-data'
import { Button } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'
import { FC, useState } from 'react'
import { post } from '../../../util/common'
import { BASE_URL } from '../../../util/settings'

const Purchase = (props: any) => {
  const [isPosted, setIsPosted] = useState(false)
  
  const handleOnClick = async (e: React.MouseEvent<HTMLElement>) => {
    setIsPosted(!e.currentTarget.getAttribute("disabled"))
    // TODO: POST処理
    console.log(props)
  // const purchaseURL: string = BASE_URL + '/articles/1/purchase'
  // TODO: upppeerCaseにする？
  // const body = {article_id: 1}
  // console.log(body)
  // const purchase: ArticleArticleIdPurchase = await post(purchaseURL, body)
  // console.log(purchase)
  // return {
  //   props: {
  //     IsSucceeded: purchase.IsSucceeded
  //   }
  // }
  };
  // const notion = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e.currentTarget.getAttribute("data-item"));
  //   // ↓これでも書ける
  //   // console.log(e.currentTarget.dataset.item);
  // };
  return (
    <>
    <div>
      {/* <p>isOK：{`${props.IsSucceeded}` || ''}</p> */}
    </div>
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
