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
