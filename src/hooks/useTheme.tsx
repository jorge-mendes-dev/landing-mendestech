import { useEffect } from 'react'

interface ThemeContextValue {
  isDarkMode: boolean
}

export function useTheme(): ThemeContextValue {
  useEffect(() => {
    // Always set dark mode as default
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  // No toggle function needed - dark mode is always on
  return { isDarkMode: true }
}
