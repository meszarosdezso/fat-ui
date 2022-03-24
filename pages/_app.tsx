import { AppProps } from "next/app"
import React from "react"
import "../styles/main.scss"
import "./app.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
