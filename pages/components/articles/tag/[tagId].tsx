import { useRouter } from 'next/router'
import React from 'react'
// localhost:3000/component/articles/tag/hoge

const tagList = () => {
  const router = useRouter()
  const { tagId } = router.query

  return <p>tagID: {tagId}</p>
}

export default tagList


// 概要：選択されたタグに紐づく、記事内容を表示する

// 機能

// 優先度 高
// TODO: 表示内容・遷移方法の詳細

// 優先度 中
// - タグ一覧の中から選択して、関連する記事内容を表示する？
// 表示内容（ジャンルタイトル、OSへのリンク、記事名、著者名、ref、abstract、、、）
// - 表示内容に、アブストの画像を追加、画像がないときはNoImageを表示

// 優先度 低
