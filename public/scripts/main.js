// @ts-check
/// <reference types="./index" />

import hljs from "https://cdn.skypack.dev/highlight.js"

const hljsStyles = document.createElement("link")
hljsStyles.rel = "stylesheet"
hljsStyles.href =
  "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/github.min.css"

document.querySelector("head").prepend(hljsStyles)

document.querySelectorAll("pre.codeblock").forEach(el => {
  hljs.highlightElement(el)
})
