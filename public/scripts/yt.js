// @ts-check

/**
 * Custom YouTube video component.
 *
 * ### Usage
 * ```html
 * <youtube-video uid="dQw4w9WgXcQ" />
 * <youtube-video url="https://www.youtube.com/embed/dQw4w9WgXcQ" />
 * ```
 */
class YoutubeVideo extends HTMLElement {
  constructor() {
    super()
    const url = this.getUrl()

    const root = this.attachShadow({ mode: "open" })

    const container = this.createContainer()
    const iframe = this.createIFrame(url)

    container.append(iframe)

    root.append(container)
  }

  createContainer() {
    const container = document.createElement("div")
    const styles = {
      position: "relative",
      paddingBottom: "56.25%",
      paddingTop: "30px",
      height: "0",
      overflow: "hidden",
    }

    for (const style in styles) {
      container.style[style] = styles[style]
    }
    return container
  }

  createIFrame(url) {
    const iframe = document.createElement("iframe")
    const styles = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    }

    for (const style in styles) {
      iframe.style[style] = styles[style]
    }

    iframe.setAttribute("src", url)
    iframe.setAttribute("frameborder", "0")
    iframe.setAttribute("allowfullscreen", "true")

    return iframe
  }

  getUrl() {
    const url = this.getAttribute("url")
    if (url) return url

    const uid = this.getAttribute("uid")
    if (!uid) throw new DOMException("property 'uid' or 'url' is required.")

    return `https://www.youtube.com/embed/${uid}`
  }
}

customElements.define("youtube-video", YoutubeVideo)

export default YoutubeVideo
