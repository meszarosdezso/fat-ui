import {
  faHamburger,
  faLongArrowLeft,
  faPizzaSlice,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAccent } from "../utils/theme"

export default function Buttons() {
  const accent = useAccent()

  return (
    <section id="buttons">
      <h2>Buttons</h2>

      <div className="buttons">
        <button className={`${accent}`}>Default</button>
        <button className={`light ${accent}`}>Light</button>
        <button className={`bordered ${accent}`}>Bordered</button>
        <button className={`disabled ${accent}`}>Disabled</button>
        <button className={`${accent} nowrap`}>
          <FontAwesomeIcon className="button-icon" icon={faHamburger} />
          With icon
        </button>
        <button className={`flat ${accent}`}>Flat</button>
        <button className={`icon ${accent}`}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className={`wrapped ${accent}`}>
          <FontAwesomeIcon icon={faPizzaSlice} />
          Wrapped
        </button>
      </div>
    </section>
  )
}
