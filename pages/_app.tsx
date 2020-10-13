import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from './store'
import styles from "./_index.module.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <div className={styles.bg_color}>
          <Component {...pageProps} />
        </div>
      </Provider>
  )
}
export default MyApp
