import '../styles/globals.css'
import {NextPage} from 'next';
import { ReactElement } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
// si el componente tiene layout, agarro eso, sino solo me quedo con la pagina
  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
