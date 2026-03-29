import { useCallback } from 'react'

// Vite import.meta.glob type declaration for TypeScript
declare const importMeta: ImportMeta
interface ImportMeta {
  glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>
}

/**
 * Custom hook to get project data by key name dynamically from JSON files.
 * @returns {(key: string) => Promise<any>}
 */
export const useProjectDataByName = (): ((key: string) => Promise<any>) => {
  /**
   * Dynamically imports the project JSON by key name.
   * @param {string} key
   * @returns {Promise<any>}
   */
  const getProjectDataByName = useCallback(
    async <T = unknown,>(key: string): Promise<T | null> => {
      if (!key) return null
      try {
        // Dynamic import using Vite's import.meta.glob
        const modules = import.meta.glob('config/project/*.json', {
          eager: true
        })
        const match = Object.entries(modules).find(([path]) =>
          path.endsWith(`/${key}.json`)
        )
        if (match) {
          // Vite eager glob returns the module default export
          const mod = match[1] as { default?: T } | T
          return (mod as any).default || mod
        }
        return null
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Error loading project data:', err)
        return null
      }
    },
    []
  )

  return getProjectDataByName
}
