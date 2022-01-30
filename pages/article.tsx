import {
  faAlignCenter,
  faAlignLeft,
  faClock,
  faHome,
  faImage,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function Article() {
  const [centered, setCentered] = useState(false)
  const [displayTitle, setDisplayTitle] = useState(false)
  const [showAuthor, setShowAuthor] = useState(true)
  const [showCover, setShowCover] = useState(true)

  return (
    <div className="article-page">
      <Head>
        <title>Article | Fat UI</title>
      </Head>
      <div
        style={{ position: 'absolute', zIndex: 2, width: '100%' }}
        className="row end py-2 px-2"
      >
        <Link href="/">
          <div style={{ marginRight: 'auto' }} className="row">
            <button
              className="icon mr-auto"
              onClick={() => {
                setCentered(!centered)
              }}
            >
              <FontAwesomeIcon icon={faHome} />
            </button>
            <h3 className="ml-2 mb-0">Fat UI</h3>
          </div>
        </Link>

        <ThemeSwitcher />

        <button
          className="icon ml-1"
          onClick={() => {
            setDisplayTitle(!displayTitle)
          }}
        >
          <span className={displayTitle ? 'display' : ''}>Ab</span>
        </button>
        <button
          className="icon ml-1"
          onClick={() => {
            setCentered(!centered)
          }}
        >
          <FontAwesomeIcon icon={centered ? faAlignCenter : faAlignLeft} />
        </button>
        <button
          className="icon ml-1"
          onClick={() => {
            setShowAuthor(!showAuthor)
          }}
        >
          <FontAwesomeIcon
            style={{
              opacity: showAuthor ? 1 : 0.2,
            }}
            icon={faUserAlt}
          />
        </button>
        <button
          className="icon ml-1"
          onClick={() => {
            setShowCover(!showCover)
          }}
        >
          <FontAwesomeIcon
            style={{
              opacity: showCover ? 1 : 0.2,
            }}
            icon={faImage}
          />
        </button>
      </div>

      <article className={centered ? 'centered' : ''}>
        <header>
          {showAuthor && (
            <a href="/">
              <div className="author">
                <div className="image">
                  <img src="https://github.com/meszarosdezso.png" alt="" />
                </div>
                <span className="name">Dezso Meszaros</span>
              </div>
            </a>
          )}

          <div className="meta">
            <span>
              Last updated{' '}
              {new Date().toISOString().substring(0, 10).replace(/-/g, '. ')}.
            </span>
            <span>
              <FontAwesomeIcon className="mr-1" icon={faClock} />2 mins
            </span>
          </div>

          <h1 className={displayTitle ? 'display' : ''}>
            This page showcases how an article looks like
          </h1>

          <h2>It can also have subtitles and a cover photo!</h2>

          {showCover && (
            <div className="cover">
              <img
                src="https://meszarosdezso.com/assets/instagram_6.jpg"
                alt="Article Cover"
              />
            </div>
          )}
        </header>

        <section className="content">
          <h2>Let's start with some blocks of text</h2>

          <p>
            Paragraphs has bigger line heights, and also some margin around
            them. There isn't anything more to say about them...
          </p>

          <p>Oh. Did I mention the lighter color?</p>

          <p>
            You can also <em>emphasize</em> or <strong>highlight</strong> some
            parts. Links have a nice <a href="">light color</a> and they can be{' '}
            <a href="" className="underline">
              underlined
            </a>
            .
          </p>

          <h2>Heading (like this)</h2>

          <p>Heading have some basic margin and bolder font.</p>

          <h3>Heres an example of an h3 heading</h3>
          <h4>Heres an example of an h4 heading</h4>
          <h5>Heres an example of an h5 heading</h5>
          <h6>Heres an example of an h6 heading</h6>

          <h2>What about lists?</h2>

          <ul>
            <li>They have items</li>
            <li>Placed on top of each other</li>
            <li>Slightly padded</li>
            <li>With a little bit of margin</li>
            <ul>
              <li>Lists inside lists are also padded</li>
              <ul>
                <li>I can go way deeper</li>
              </ul>
            </ul>
          </ul>

          <h3>We can order them like this:</h3>

          <ol>
            <li>First element</li>
            <li>Second element</li>
            <ol type="a">
              <li>Nested first</li>
              <li>Nested second</li>
            </ol>
          </ol>

          <h2>Can we use tables?</h2>

          <table>
            <tbody>
              <tr>
                <td>Why</td>
                <td>not?</td>
              </tr>
              <tr>
                <td>They won't be</td>
                <td>any special.</td>
              </tr>
            </tbody>
          </table>

          <h2>Images</h2>

          <p>They will not be bigger than the article's width.</p>

          <img
            src="https://meszarosdezso.com/assets/instagram_5.jpg"
            alt="Article Cover"
          />
        </section>
      </article>

      <Footer />
    </div>
  )
}
