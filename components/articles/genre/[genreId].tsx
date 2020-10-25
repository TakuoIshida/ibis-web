import { useRouter } from 'next/router'
import React from 'react'
// localhost:3000/component/articles/genre/hoge

const genreList = () => {
  const router = useRouter()
  const { genreId } = router.query

  return <p>genreId: {genreId}</p>
}

export default genreList

// 概要：記事のジャンルごとの一覧を表示する

// 機能

// 優先度 高
// - ジャンルごとの記事一覧を表示する（Idと記事名を対応させる）
// - 記事はCardコンポネントのイメージ
// - 表示内容（ジャンルタイトル、記事名、著者名、ref、abstract）
// -

// 優先度 中
// - 表示内容に、アブストの画像を追加、画像がないときはNoImageを表示

// 優先度 低