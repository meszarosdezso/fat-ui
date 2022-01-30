import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useMemo,
  useState,
} from 'react'

export default function ThemeSwitcher(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  const theme = useMemo(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('fat-design-theme') || 'light'
    }
    return 'light'
  }, [typeof window === 'undefined'])

  const [light, setLight] = useState(theme === 'light')

  useEffect(() => {
    const theme = light ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('fat-design-theme', theme)
  }, [light])

  const changeLight = () => {
    setLight(!light)
  }

  return (
    <button
      {...props}
      onClick={changeLight}
      className={`${props.className} icon`}
    >
      <FontAwesomeIcon size="1x" icon={light ? faSun : faMoon} />
    </button>
  )
}
