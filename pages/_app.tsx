import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from "styled-components"
import styles from "./_index.module.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ backGroundColor: "yellow"}}>
      <Provider store={store}>
        <div className={styles.bg_color}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </ThemeProvider>
  )
}
export default MyApp
