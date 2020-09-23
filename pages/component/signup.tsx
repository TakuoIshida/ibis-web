import React from 'react'

const signup = () => {
  return (
    <>
      <div>
        signup page
      </div>
    </>
  )
}

export default signup

// 概要：会員登録画面。

// 機能
// - 登録内容の入力
// user_mail, passwordのstate保持
// - Validation
// user_mail < 32, isUnique, password > 8 等

// omniAuth認証のリクエスト

// - loginページへのリンク
// - signoutページへのリンク
