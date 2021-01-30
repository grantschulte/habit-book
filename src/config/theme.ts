import { DefaultTheme } from "styled-components";

type Theme = {
  light: DefaultTheme;
};

const lightTheme: DefaultTheme = {
  color: {
    primary: "#2AB7CA",
    secondary: "#FE4A49",
    tertiary: "#FED766",
    text: "#222222",
    background: "#F4F4F8",
    success: "#176440",
    successBackground: "#CDF4E2",
    error: "#91121D",
    errorBackground: "#F8C9CD",
    warning: "#91121D",
    warningBackground: "#FFEEC2",
    info: "#222222",
    infoBackground: "#E0E0E0",
    white: "#F2F2F2",
    black: "#222222",
    grey: {
      100: "#E0E0E0",
      200: "#D6D6D6",
      300: "#CCCCCC",
      400: "#C2C2C2",
      500: "#B8B8B8",
      600: "#ADADAD",
      700: "#A3A3A3",
      800: "#999999",
    },
    blue: {
      100: "#",
      200: "#",
      300: "#",
      400: "#",
      500: "#",
      600: "#",
      700: "#",
      800: "#",
    },
    red: {
      100: "#F8C9CD",
      200: "#F4A4AB",
      300: "#EF8089",
      400: "#EB5C68",
      500: "#E63746",
      600: "#DA1B2B",
      700: "#B61624",
      800: "#91121D",
    },
    yellow: {
      100: "#",
      200: "#",
      300: "#",
      400: "#",
      500: "#",
      600: "#",
      700: "#",
      800: "#",
    },
    green: {
      100: "#CDF4E2",
      200: "#ACECCE",
      300: "#8BE5BB",
      400: "#48D594",
      500: "#2DC880",
      600: "#26A66A",
      700: "#1E8555",
      800: "#176440",
    },
    orange: {
      100: "#FFEEC2",
      200: "#FFE299",
      300: "#FFD770",
      400: "#FFCB47",
      500: "#F5AF00",
      600: "#CC9200",
      700: "#A37500",
      800: "#7A5800",
    },
  },
  font: {
    body: "'Raleway', sans-serif",
    heading: "'Raleway', sans-serif",
    display: "'Lobster', cursive",
  },
  fontWeight: {
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
  },
  button: {
    primary: {
      background: "#2AB7CA",
      text: "#222222",
    },
    secondary: {
      background: "#FED766",
      text: "#222222",
    },
    tertiary: {
      background: "#222222",
      text: "#F2F2F2",
    },
  },
  borderWidth: {
    1: "1px",
    2: "2px",
  },
  borderRadii: {
    1: "2px",
    2: "4px",
    3: "6px",
    4: "8px",
  },
  spacing: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "2rem",
    8: "2.5rem",
  },
  borderWeight: {
    solid: "solid",
  },
};

const theme: Theme = {
  light: lightTheme,
};

export default theme;
