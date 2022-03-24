import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/github.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
        <script type="module" src="./scripts/main.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />

        <script defer>hljs.highlightAll()</script>
      </body>
    </Html>
  )
}
