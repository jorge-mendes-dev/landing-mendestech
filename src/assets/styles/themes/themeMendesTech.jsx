// eslint-disable-next-line import/no-anonymous-default-export
export default {
  colors: {
    primary: '#001C43',
    offwhite: '#F4F7F8',
    gold: '#D9CCA1',
    softblue: '#b4ebfc',
    darkblue: '#102e46',
    bluehighlight: '#87d1eb',
    title: '#0f162a',
    bggray: '#d5e1e3',
    texts: '#848486',
    gray: '#ddd',
    mediumBackground: '#222831',
    background: '#393e46',
    white: '#ffffff',
    black: '#222222',
    darker: ' rgba(0, 0, 0, 0.75)'
  },
  font: {
    family: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      heading: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    sizes: {
      xs: '0.75rem', // 12px - captions only
      sm: '0.875rem', // 14px - small text
      base: '1rem', // 16px - body text (minimum readable)
      lg: '1.125rem', // 18px - large body
      xl: '1.25rem', // 20px - subheadings
      '2xl': '1.5rem', // 24px - h4
      '3xl': '1.875rem', // 30px - h3
      '4xl': '2.25rem', // 36px - h2
      '5xl': '3rem', // 48px - h1
      '6xl': '3.75rem' // 60px - display
    },
    weight: {
      light: 300,
      normal: 400, // base
      medium: 500,
      semibold: 600,
      bold: 700
    },
    height: {
      tight: 1.2, // headings
      medium: 1.5, // body text
      relaxed: 1.6, // large body text
      loose: 1.7 // paragraphs
    }
  },
  spacings: {
    xxsmall: '0.4rem', // xxs
    xsmall: '0.8rem', // xs
    base: '1rem',
    small: '1.6rem', // sm
    medium: '2.4rem', // base
    large: '3.2rem', // md
    xlarge: '4.8rem', // lg
    xxlarge: '6.4rem' // xlg
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  border: {
    radius: '0.25em'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    card: '0px 1px 6px 1px #393e46',
    cardElevated: '0px 2px 6px 2px #393e46',
    header: '6px 6px 0px #393e46'
  }
}
