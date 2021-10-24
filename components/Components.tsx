import {
  faCog,
  faDatabase,
  faDollarSign,
  faHome,
  faMusic,
  faTree,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Notifications from './Notifications'
import Pagination from './Pagination'

export default function Components() {
  return (
    <section id="components">
      <h2>Components</h2>
      <br />
      <h3>Data card</h3>

      <div className="card-group">
        <div className="data-card elevated-2">
          <span className="data-card-title">Free space</span>
          <div className="data-card-value">156 TB</div>
          <div className="data-card-icon text-grey">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
        </div>

        <div className="data-card elevated-light royal gradient-royal">
          <span className="data-card-title">Income</span>
          <div className="data-card-value">$1990</div>
          <div className="data-card-icon">
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
        </div>

        <div className="data-card sea">
          <span className="data-card-title">Trees planted</span>
          <div className="data-card-value">27 891</div>
          <div className="data-card-icon">
            <FontAwesomeIcon icon={faTree} />
          </div>
        </div>

        <div className="data-card plum light">
          <span className="data-card-title">Hours listened</span>
          <div className="data-card-value">5 462</div>
          <div className="data-card-icon">
            <FontAwesomeIcon icon={faMusic} />
          </div>
        </div>
      </div>

      <br />
      <br />

      <h3>Menu card</h3>

      <div className="card-group">
        <div className="menu-card elevated-2">
          <div className="menu-card-icon">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="menu-card-title">Home</div>
        </div>

        <div className="menu-card elevated-2">
          <div className="menu-card-icon">
            <FontAwesomeIcon icon={faCog} />
          </div>
          <div className="menu-card-title">Settings</div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <Pagination />

      <Notifications />
    </section>
  )
}
