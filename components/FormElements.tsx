import {
  faCaretDown,
  faCheck,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAccent } from "../utils/theme"

export default function FormElements() {
  const accent = useAccent()

  return (
    <section id="form-elements">
      <h2>Form Elements</h2>
      <br />

      <h3>Search bars</h3>
      <div className="form-elements">
        <div className="search-bar">
          <FontAwesomeIcon className="search-bar-icon" icon={faSearch} />
          <input type="text" placeholder="Type something here..." />
        </div>
        <div className="search-bar">
          <FontAwesomeIcon className="search-bar-icon" icon={faSearch} />
          <input type="text" placeholder="Type something here..." />
          <div className="search-results">
            <ul className="list">
              <li>Is this what you're looking for?</li>
              <li>Or this?</li>
              <li>Maybe... this?</li>
            </ul>
          </div>
        </div>
      </div>

      <br />
      <h3>Inputs</h3>

      <div className="form-elements">
        <input type="text" placeholder="Type something here..." />
      </div>

      <br />
      <h3>Text areas</h3>

      <div className="form-elements">
        <textarea cols={30} rows={10}></textarea>
      </div>

      <br />
      <h3>Checkboxes</h3>

      <div className="form-elements">
        <div className={`checkbox text-${accent}`}>
          <div className="checkbox-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <input type="checkbox" name="" id="" />
        </div>

        <div className={`checkbox text-${accent} selected`}>
          <div className="checkbox-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <input type="checkbox" />
        </div>
      </div>
      <br />
      <div className="form-elements">
        <div className={`checkbox small text-${accent}`}>
          <div className="checkbox-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <input type="checkbox" name="" id="" />
        </div>

        <div className={`checkbox small text-${accent} selected`}>
          <div className="checkbox-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <input type="checkbox" />
        </div>
      </div>

      <br />
      <br />
      <h3>Radio</h3>

      <div className="form-elements">
        <div className={`radio text-${accent}`}>
          <input type="radio" name="" id="" />
        </div>
        <div className={`radio text-${accent} selected`}>
          <input type="radio" name="" id="" />
        </div>
      </div>

      <br />
      <br />
      <h3>Select</h3>

      <div className="form-elements">
        <div className={`select`}>
          <span className="value">
            Default
            <div className="select-icon">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </span>
          <select name="" id=""></select>
        </div>
        <div className={`select elevated-1`}>
          <span className="value">
            Elevated
            <div className="select-icon">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </span>
          <select name="" id=""></select>
        </div>
        <div className={`select ${accent} light elevated-light`}>
          <span className="value">
            Themed
            <div className="select-icon">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </span>
          <select name="" id=""></select>
        </div>
        <div className={`select ${accent} bordered`}>
          <span className="value">
            Bordered
            <div className="select-icon">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </span>
          <select name="" id=""></select>
        </div>
      </div>
    </section>
  )
}
