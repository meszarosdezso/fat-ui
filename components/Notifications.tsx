import {
  faCheck,
  faExclamationTriangle,
  faExternalLinkAlt,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const notis = [
  {
    time: '14:57',
    icon: faPizzaSlice,
    type: 'royal',
    title: 'New! Realtime communication between users!',
    body: `Users are now notified about each others activity without refreshing the page.`,
    link: 'a1b',
  },
  {
    time: '01:08',
    icon: faCheck,
    type: 'sea',
    title: 'Everything operates normally.',
  },
  {
    time: 'Yesterday, 18:13',
    icon: faExclamationTriangle,
    type: 'warn',
    title: 'Database maintenance',
    body: `We are making changes to our database this evening around 1am. Saving and loading data might be slower than usual.`,
  } as const,
]

export default function Notifications() {
  return (
    <section id="notifications">
      <h3>Notifications</h3>

      <ul style={{ maxWidth: '540px' }} className="list elevated-3">
        <h2 className="pl-2 mb-0 mt-3 fw-400">Notifications</h2>
        {notis.map(noti => (
          <li
            key={noti.title}
            className="notification with-icon py-2 px-2 mt-2"
          >
            <div
              className={`notificaion-icon list-item-icon circle md ${noti.type}`}
            >
              <FontAwesomeIcon fixedWidth icon={noti.icon} />
            </div>
            <div className="notification-content">
              <h6 className="notification-time datetime mb-xs">{noti.time}</h6>
              <h3 className="notification-title mb-0 fw-600">{noti.title}</h3>

              {noti.body ? (
                <p className="notification-body my-2">{noti.body}</p>
              ) : null}

              {noti.link ? (
                <a className="exernal">
                  Learn more
                  <FontAwesomeIcon
                    className="ml-1 external-icon"
                    size={'xs'}
                    icon={faExternalLinkAlt}
                  />{' '}
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
