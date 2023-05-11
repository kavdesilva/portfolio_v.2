import '../styles/app.css'
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>kavdesilva</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
