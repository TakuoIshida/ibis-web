import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/dev'
import styles from '../public/styles/_index.module.scss'
import Head from 'next/head'
import { AuthProvider } from '../util/auth/Auth'
import Router from 'next/router'
import NProgress from 'nprogress'
import SearchAppBar from '../re-ducks/commons/components/AppBar'
import PageBreadcrumbs from '../re-ducks/commons/components/Breadcrumb'
import { useState } from 'react'
import Loading from '../re-ducks/commons/components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  Router.events.on('routeChangeError', () => setLoading(false))
  // TODO: login認証後のstripe決済情報の同期
    // １ フロント：Login時に、/api/v1/にユーザーのemaliをバックエンドに投げる
    // ２ バック：リクエストを受けて、stripeにユーザーemailがあるか確認する
    // ３ バック：ユーザーがあれば、そのまま取得する。なければ作成して、customer情報をフロントに返す
    // ４ フロント：ユーザーのcustomer情報（主に、id, token）を取得し、状態として保持する

    // TODO: Login時に、ユーザーidに紐づいたランクを取得する
    // １ フロント：idをバックエンドに渡す。
    // ２ バックエンド：user_id を元に、ランクを取得する
    // ３ フロント：userランクをglobalに保持する
    // ４ 各ページでランクをuseContextで取得し、ランクごとの処理を実装する
  return (
      <Provider store={store}>
        <AuthProvider>
          <Head>
          <title>IBiS</title>
          <link rel="icon" href="/favicon.svg"/>
          </Head>
          <div className={styles.bg_color}>
            {loading? <Loading /> : <></>}
            <SearchAppBar />
            <PageBreadcrumbs />
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </Provider>
  )
}
export default MyApp
