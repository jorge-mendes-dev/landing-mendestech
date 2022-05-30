// eslint-disable-next-line import/no-anonymous-default-export
export default {
  colors: {
    primary: "#ff0000",
    texts: "#ff5252",
    postColor: "#f9f8eb",
    highlight: "#ff0000",
    mediumBackground: "#222831",
    background: "#393e46",
    timelineColor: "#a70000",
    timelineLine: "#ff0000",
    timelineDate: "#f9f8eb",
    white: "#ffffff",
    black: "#222222",
    darker: " rgba(0, 0, 0, 0.75)",
  },
  font: {
    family: {
      normal:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      heading:
        "Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    sizes: {
      xxsmall: "1rem", // xs
      xsmall: "1.2rem", // sm
      small: "1.4rem", // base
      medium: "1.6rem", // md
      large: "1.8rem", // lg
      xlarge: "2.4rem", // xl
      xxlarge: "3.2rem", // xxl
    },
    weight: {
      light: 300,
      normal: 400, // base
      bold: 700,
    },
    height: {
      medium: 1.4, // base
      heading: 1.2,
    },
  },
  spacings: {
    xxsmall: "0.4rem", // xxs
    xsmall: "0.8rem", // xs
    small: "1.6rem", // sm
    medium: "2.4rem", // base
    large: "3.2rem", // md
    xlarge: "4.8rem", // lg
    xxlarge: "6.4rem", // xlg
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  border: {
    radius: "0.4rem",
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
  shadow: {
    card: "0px 1px 6px 1px #393e46",
    cardElevated: "0px 2px 6px 2px #393e46",
    header: "0px 4px 4px #393e46",
  },
};
