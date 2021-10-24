import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAccent } from '../utils/theme'

export default function Chips() {
  const accent = useAccent()

  return (
    <section id="chips">
      <h2>Chips</h2>

      <div className="chips">
        <div className={`chip`}>
          <span className="value">Default</span>
        </div>
        <div className={`chip selected`}>
          <span className="value">Selected</span>
        </div>
      </div>
      <br />
      <div className="chips">
        <div className={`chip ${accent}`}>
          <span className="value">Colored</span>
        </div>
        <div className={`chip selected ${accent}`}>
          <span className="value">Selected</span>
        </div>
      </div>
      <br />
      <div className="chips">
        <div className={`chip small`}>
          <span className="value">Small</span>
        </div>
        <div className={`chip small selected`}>
          <span className="value">Selected</span>
        </div>
      </div>
      <br />
      <div className="chips">
        <div className={`chip small`}>
          <span className="value">Small</span>
        </div>
        <div className={`chip small selected`}>
          <FontAwesomeIcon icon={faCheck} />
          <span className="value">Selected</span>
        </div>
      </div>
    </section>
  )
}
