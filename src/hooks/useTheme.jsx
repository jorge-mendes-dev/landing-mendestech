import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const userPreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const savedPreference = localStorage.getItem('theme')
    const initialMode =
      savedPreference === 'dark' || (!savedPreference && userPreference)

    setIsDarkMode(initialMode)
    document.body.classList.toggle('dark', initialMode)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    document.body.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  return { isDarkMode, toggleDarkMode }
}
