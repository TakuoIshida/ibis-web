import React from 'react'

const edit = () => {
    return (
        <div>
        mypage page edit
      </div>
    )
}

export default edit

// 概要：ユーザー情報を編集する画面。

// 機能

// - 入力動作
// user_mail, password、支払い情報（クレジット）、のstate保持

// - Validation
// user_mail < 32, isUnique, password > 8 等

// - キャンセル
// 入力を初期化して、ページを元のページ（mypage）に戻る

// - 更新
// 入力情報を更新して、ページを元のページ（mypage）に戻る