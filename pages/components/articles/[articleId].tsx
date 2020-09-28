import { useRouter } from 'next/router'
import React from 'react'
// localhost:3000/component/articles/hoge

const articleContent = () => {
  const router = useRouter()
  const { articleId } = router.query

  return <p>記事ID: {articleId}</p>
}

export default articleContent


// 概要：記事一覧、ジャンル一覧、タグ一覧から選択された、記事内容を表示する

// 機能

// 優先度 高
// - 記事一覧から、遷移して記事内容を表示する
// - ジャンル一覧から、遷移して記事内容を表示する
// - タグ一覧から、遷移して記事内容を表示する
// 表示内容（ジャンルタイトル、OSへのリンク、記事名、著者名、ref、abstract、、、）
// -
// TODO: 表示内容の詳細

// 優先度 中
// - 表示内容に、アブストの画像を追加、画像がないときはNoImageを表示

// 優先度 低