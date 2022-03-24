// @ts-check
/// <reference types="./index" />

import hljs from "https://cdn.skypack.dev/highlight.js"

const isDarkMode =
  document.documentElement.getAttribute("data-theme") === "dark"

// Syntax Highlighting
const hljsStyles = document.createElement("link")
const theme = isDarkMode ? "github-dark" : "github"
hljsStyles.rel = "stylesheet"
hljsStyles.href = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/${theme}.min.css`

document.querySelector("head")?.prepend(hljsStyles)

document.querySelectorAll("pre.codeblock").forEach(el => {
  hljs.highlightElement(el)
})
