import { useCallback } from 'react'

/**
 * Custom hook to get project data by key name dynamically from JSON files.
 * @returns {(key: string) => Promise<any>}
 */
export const useProjectDataByName = () => {
  /**
   * Dynamically imports the project JSON by key name.
   * @param {string} key
   * @returns {Promise<any>}
   */
  const getProjectDataByName = useCallback(async (key) => {
    if (!key) return null
    try {
      // Dynamic import using Vite's import.meta.glob
      const modules = import.meta.glob('config/project/*.json', { eager: true })
      const match = Object.entries(modules).find(([path]) =>
        path.endsWith(`/${key}.json`)
      )
      if (match) {
        // Vite eager glob returns the module default export
        return match[1].default || match[1]
      }
      return null
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error loading project data:', err)
      return null
    }
  }, [])

  return getProjectDataByName
}
