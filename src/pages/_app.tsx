import '../assets/fonts/dm-sans/dm-sans.css'
import '../styles/index.css'
// import 'react-wheel-of-prizes/dist/index.css'

import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import useLoadTheme from '../hooks/useLoadTheme'

import { ApolloProvider } from '@apollo/client'
import client from '../apollo'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  return (
    <main>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <ToastContainer />
      </ApolloProvider>
    </main>
  )
}

export default MyApp
