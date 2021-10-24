import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useMemo, useState } from 'react'

export default function ThemeSwitcher() {
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
    <FontAwesomeIcon
      onClick={changeLight}
      style={{ marginBottom: '1rem' }}
      size="2x"
      icon={light ? faSun : faMoon}
    />
  )
}
