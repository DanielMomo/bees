import React from 'react'
import type { AppProps } from 'next/app'
import Provider from 'infra/Provider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
