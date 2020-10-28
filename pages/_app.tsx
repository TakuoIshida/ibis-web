import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/dev'
import styles from '../public/static/styles/_index.module.scss'
import Head from 'next/head'
import { AuthProvider } from '../components/auth/Auth'
import Loading from '../components/common/Loading'
import Router from 'next/router'
import NProgress from 'nprogress'
Router.events.on('routeChangeStart', () => NProgress.inc())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
      <Provider store={store}>
        <AuthProvider>
          <Head>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/static/styles/nprogress.css" />
        </Head>
          <div className={styles.bg_color}>
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </Provider>
  )
}
export default MyApp
