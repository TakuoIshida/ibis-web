import React from 'react'

const login = () => {
  return (
    <>
      <div>
        login page
      </div>
    </>
  )
}

export default login

// ボタンでの実装でもいいかも。
// 概要：ユーザーがログインを行う画面。

// 機能

// - 入力動作
// user_mail, passwordのstate保持

// - Validation
// user_mail < 32, isUnique, password > 8 等

// ログインへの認証のリクエスト

// - OmniAuthの認証機能
// google, twitter

// - signupページへのリンク
// - signoutページへのリンク
