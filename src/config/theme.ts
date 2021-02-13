import { DefaultTheme } from "styled-components";

type Theme = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

const BASE_THEME = {
  font: {
    body: "'SFMono-Regular',Consolas, 'Liberation Mono', Menlo, Courier",
    heading: "'SFMono-Regular',Consolas, 'Liberation Mono', Menlo, Courier",
    display: "'SFMono-Regular',Consolas, 'Liberation Mono', Menlo, Courier",
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
  borderWidth: {
    1: "1px",
    2: "2px",
  },
  borderRadii: {
    1: "1px",
    2: "2px",
    3: "4px",
    4: "8px",
  },
  borderWeight: {
    solid: "solid",
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
};

const LIGHT_THEME = {
  primary: "#3CACF6",
  secondary: "#EE4266",
  text: "#131516",
  textDisabled: "#C2C2C2",
  background: "#FFFFFF",
  backgroundAlt: "#F1F1F1",
  success: "#49D48A",
  error: "#EB5C68",
  warning: "#CC9200",
  info: "#3CACF6",
  white: "#EFFAFB",
  black: "#131516",
  button: {
    primary: {
      background: "#3CACF6",
      text: "#131516",
      border: "#131516",
    },
    secondary: {
      background: "#EE4266",
      text: "#131516",
      border: "#131516",
    },
  },
  border: "#131516",
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
  green: {
    100: "#9CE8BF",
    200: "#8BE4B5",
    300: "#7BE0AA",
    400: "#69DC9E",
    500: "#5Ad895",
    600: "#49D48A",
    700: "#39D080",
    800: "#2FC675",
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
  blue: {
    100: "#77C5F9",
    200: "#63BCF8",
    300: "#50B4F7",
    400: "#3CACF6",
    500: "#29A3F5",
    600: "#159BF4",
    700: "#0B91EA",
    800: "#0A81D1",
  },
};

const DARK_THEME = {
  primary: "#3CACF6",
  secondary: "#EE4266",
  text: "#EFFAFB",
  textDisabled: "#C2C2C2",
  background: "#131516",
  backgroundAlt: "#2F3437",
  success: "#69DC9E",
  error: "#EB5C68",
  warning: "#FFCB47",
  info: "#3CACF6",
  white: "#EFFAFB",
  black: "#131516",
  button: {
    primary: {
      background: "#3CACF6",
      text: "#131516",
      border: "#3CACF6",
    },
    secondary: {
      background: "#EE4266",
      text: "#131516",
      border: "#EE4266",
    },
  },
  border: "#EFFAFB",
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
  green: {
    100: "#9CE8BF",
    200: "#8BE4B5",
    300: "#7BE0AA",
    400: "#69DC9E",
    500: "#5Ad895",
    600: "#49D48A",
    700: "#39D080",
    800: "#2FC675",
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
  blue: {
    100: "#77C5F9",
    200: "#63BCF8",
    300: "#50B4F7",
    400: "#3CACF6",
    500: "#29A3F5",
    600: "#159BF4",
    700: "#0B91EA",
    800: "#0A81D1",
  },
};

const lightTheme: DefaultTheme = {
  ...BASE_THEME,
  color: LIGHT_THEME,
};

const darkTheme: DefaultTheme = {
  ...BASE_THEME,
  color: DARK_THEME,
};

const theme: Theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
