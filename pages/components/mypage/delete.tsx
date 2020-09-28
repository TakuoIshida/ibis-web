import React from 'react'

const deleteUser = () => {
    return (
        <div>
        mypage page delete
      </div>
    )
}

export default deleteUser


// 概要：ユーザーが退会するのを確認する画面。

// 機能

// - キャンセル
// mypageに戻る
// - 退会
// 「本当に退会しますか？」→ユーザー情報の削除
// →削除動作成功後、TopPageへ遷移
// 遷移後、「[ユーザーEmail]が削除されました」