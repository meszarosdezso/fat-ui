// @ts-check
/// <reference types="./index" />

import hljs from "https://cdn.skypack.dev/highlight.js"

document.querySelectorAll("pre.codeblock").forEach(el => {
  hljs.highlightElement(el, { language: "rust" })
})
