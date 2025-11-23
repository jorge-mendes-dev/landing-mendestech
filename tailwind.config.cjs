module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }], // 12px
      sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }], // 14px
      base: ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }], // 16px - minimum for body text
      lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.01em' }], // 18px
      xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }], // 20px
      '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }], // 24px
      '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }], // 30px
      '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }], // 36px
      '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }], // 48px
      '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }] // 60px
    },
    extend: {
      colors: {
        // Primary brand colors - improved contrast
        primary: {
          DEFAULT: '#0691c1',
          light: '#0ea5d9',
          dark: '#0284a8',
          darker: '#027394',
          50: '#ecf9fd',
          100: '#d0f0fa',
          200: '#a7e1f5',
          300: '#6fcaed',
          400: '#32aee0',
          500: '#0691c1', // Main
          600: '#0574a0',
          700: '#055d82',
          800: '#084e6c',
          900: '#0c425a'
        },
        // Secondary colors
        secondary: {
          DEFAULT: '#001C43',
          light: '#002d5f',
          dark: '#00112e',
          50: '#e6e9f0',
          100: '#b3bdd1',
          200: '#8091b2',
          300: '#4d6593',
          400: '#1a3974',
          500: '#001C43', // Main
          600: '#001635',
          700: '#001027',
          800: '#000b19',
          900: '#00060b'
        },
        // Semantic colors with proper dark mode variants
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
          DEFAULT: '#ffffff'
        },
        surface: {
          light: '#f8f9fa',
          dark: '#181818',
          DEFAULT: '#f8f9fa'
        },
        text: {
          primary: {
            light: '#1a1a1a',
            dark: '#f5f5f5',
            DEFAULT: '#1a1a1a'
          },
          secondary: {
            light: '#4a5568',
            dark: '#a0aec0',
            DEFAULT: '#4a5568'
          },
          tertiary: {
            light: '#718096',
            dark: '#718096',
            DEFAULT: '#718096'
          }
        },
        // Legacy colors (keeping for backward compatibility)
        tertiary: '#99a0a3',
        border: {
          light: '#e2e8f0',
          dark: '#2d3748',
          DEFAULT: '#e2e8f0'
        },
        highlight: '#3F0F4D',
        offwhite: '#F4F7F8',
        title: {
          light: '#0f162a',
          dark: '#f5f5f5',
          DEFAULT: '#0f162a'
        },
        bggray: '#d5e1e3',
        texts: {
          light: '#4a5568',
          dark: '#cbd5e0',
          DEFAULT: '#4a5568'
        },
        medium: '#393e46',
        gold: '#D9CCA1',
        softblue: '#b4ebfc',
        darkblue: '#102e46',
        mediumBackground: '#222831',
        white: '#ffffff',
        black: '#0a0a0a',
        darker: 'rgba(0, 0, 0, 0.75)'
      },
      animation: {
        vote: 'vote 1s ease-in-out',
        shimmer: 'shimmer 2s linear infinite',
        blob: 'blob 7s infinite'
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)'
          },
          '25%': {
            transform: 'rotate(-30deg)'
          },
          '75%': {
            transform: 'rotate(30deg)'
          }
        },
        slide: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '100% 0' }
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' }
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      },
      backgroundImage: {
        'code-image': "url('public/code.jpg')"
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card-elevated':
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        header:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'dark-card':
          '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        'dark-card-hover':
          '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    }
  },
  variants: {},
  plugins: []
}
