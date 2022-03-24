declare module "https://cdn.skypack.dev/highlight.js" {
  interface HighlightJs {
    highlightElement(el: Element, options?: { language: string }): void
  }
  export default hljs as HighlightJs
}
