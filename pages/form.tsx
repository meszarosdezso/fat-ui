import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ThemeSwitcher from "../components/ThemeSwitcher"

export default function Article() {
  return (
    <div className="article-page">
      <Head>
        <title>Form | Fat UI</title>
      </Head>

      <section className="p-4">
        <Header>
          <ThemeSwitcher />
        </Header>

        <header className="mb-4">
          <h1>Forms</h1>
        </header>

        <form className="my-4">
          <h2 className="title">Please log in</h2>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name here"
            />
          </div>

          <div className="field">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password here"
            />
          </div>

          <div className="field row">
            <div className="checkbox small text-primary selected">
              <div className="checkbox-icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <input type="checkbox" />
            </div>
            <label className="font-sm" htmlFor="tos">
              I accept the <a href=""> terms of service</a>
            </label>
          </div>

          <div className="actions">
            <button className="sea">Submit</button>
            <button className="danger light">Cancel</button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  )
}
