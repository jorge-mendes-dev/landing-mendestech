module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      base: ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
      lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
      xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
      '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
      '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
      '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
      '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }]
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
          darker: '#1d4ed8',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },

        secondary: {
          DEFAULT: '#1e293b',
          light: '#334155',
          dark: '#0f172a',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },

        background: {
          light: '#ffffff',
          dark: '#0f172a',
          DEFAULT: '#ffffff'
        },

        surface: {
          light: '#f8fafc',
          dark: '#1e293b',
          DEFAULT: '#f8fafc'
        },

        text: {
          primary: {
            light: '#0f172a',
            dark: '#f1f5f9',
            DEFAULT: '#0f172a'
          },
          secondary: {
            light: '#475569',
            dark: '#cbd5e1',
            DEFAULT: '#475569'
          },
          tertiary: {
            light: '#64748b',
            dark: '#94a3b8',
            DEFAULT: '#64748b'
          }
        },

        border: {
          light: '#e2e8f0',
          dark: '#334155',
          DEFAULT: '#e2e8f0'
        },

        tertiary: '#64748b',
        highlight: '#6366f1',
        offwhite: '#f8fafc',

        title: {
          light: '#0f172a',
          dark: '#f1f5f9',
          DEFAULT: '#0f172a'
        },

        bggray: '#334155',

        texts: {
          light: '#475569',
          dark: '#cbd5e1',
          DEFAULT: '#475569'
        },

        medium: '#1e293b',
        gold: '#f59e0b',
        softblue: '#93c5fd',
        darkblue: '#0f172a',
        mediumBackground: '#1e293b',
        white: '#ffffff',
        black: '#020617',
        darker: 'rgba(0, 0, 0, 0.7)'
      },

      animation: {
        vote: 'vote 1s ease-in-out',
        shimmer: 'shimmer 2s linear infinite',
        blob: 'blob 7s infinite',
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-delayed': 'fadeInUp 1s ease-out 0.3s forwards',
        progress: 'progress 2.5s ease-in-out forwards'
      },

      keyframes: {
        vote: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-30deg)' },
          '75%': { transform: 'rotate(30deg)' }
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
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },

        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },

        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },

        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },

      backgroundImage: {
        'code-image': "url('public/code.jpg')"
      },

      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)',
        'card-hover':
          '0 10px 15px -3px rgba(0,0,0,0.15), 0 4px 6px -2px rgba(0,0,0,0.08)',
        'card-elevated':
          '0 20px 25px -5px rgba(0,0,0,0.15), 0 10px 10px -5px rgba(0,0,0,0.08)',
        header:
          '0 4px 6px -1px rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.08)',
        'dark-card':
          '0 1px 3px 0 rgba(0,0,0,0.35), 0 1px 2px 0 rgba(0,0,0,0.25)',
        'dark-card-hover':
          '0 10px 15px -3px rgba(0,0,0,0.35), 0 4px 6px -2px rgba(0,0,0,0.25)'
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
