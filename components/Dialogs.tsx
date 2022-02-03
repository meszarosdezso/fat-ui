import {
  faExclamationTriangle,
  faMoneyCheck,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Dialogs() {
  return (
    <section id="dialogs">
      <h2>Dialogs</h2>

      <div className="dialog">
        <h2 className="dialog-title">Payment confirmation</h2>

        <div className="dialog-body">
          <p>Are you sure?</p>
        </div>

        <div className="dialog-actions">
          <button className="sea">
            <FontAwesomeIcon className="button-icon" icon={faMoneyCheck} />
            Pay
          </button>
          <button>Cancel</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="dialog">
        <div className="dialog-icon danger">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        <h2 className="dialog-title">Whoops, something bad happened!</h2>

        <div className="dialog-body">
          <p>Please refresh the page.</p>
        </div>

        <div className="dialog-actions">
          <button className="danger light">
            <FontAwesomeIcon className="button-icon" icon={faUndoAlt} />
            Refresh
          </button>
        </div>
      </div>
    </section>
  )
}
