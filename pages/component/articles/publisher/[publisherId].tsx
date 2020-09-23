import { useRouter } from 'next/router'
import React from 'react'
// localhost:3000/component/articles/publisher/hoge

const publisherList = () => {
  const router = useRouter()
  const { publisherId } = router.query

  return <p>publisherId: {publisherId}</p>
}

export default publisherList


// 概要：出版社一覧から出版社を選択し、最近の記事内容を表示する

// 機能

// 優先度 高
// - 出版社一覧から出版社を選択し、最近の記事内容を表示する
// 表示内容（ジャンルタイトル、OSへのリンク、記事名、著者名、ref、abstract、、、）
// TODO: 表示内容の詳細

// 優先度 中
// - 表示内容に、アブストの画像を追加、画像がないときはNoImageを表示

// 優先度 低
// - pager
// - styles