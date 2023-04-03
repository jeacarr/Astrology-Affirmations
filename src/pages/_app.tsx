import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Navigation} from '@/components/layout/NavigationBar'
import { Provider } from 'react-redux'
import { store } from '@/state/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navigation/>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
