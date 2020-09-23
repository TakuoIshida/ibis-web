// localhost:3000/component/mypage/hoge にアクセスすると
// -> component/mypage/[userId].tsxが読み込まれる。
// index.tsxへはhogeが渡される

import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
    const router = useRouter()
  const { userId } = router.query

  return <p>ユーザーID: {userId}</p>
}

export default index
