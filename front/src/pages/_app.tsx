import React from 'react'
import type { AppProps } from 'next/app'
import Store from '../infra/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  )
}
