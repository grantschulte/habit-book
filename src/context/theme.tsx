import "styled-components";
import { DefaultTheme } from "styled-components";

type Theme = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

const theme: Theme = {
  light: {
    color: {
      primary: "#197278",
      secondary: "#C44536",
      tertiary: "#772E25",
      bodyText: "#283D3B",
      background: "#EDDDD4",
    },
    font: {
      body: "'Montserrat', sans-serif",
      heading: "'Montserrat', sans-serif",
    },
  },
  dark: {
    color: {
      primary: "#197278",
      secondary: "#C44536",
      tertiary: "#772E25",
      bodyText: "#EDDDD4",
      background: "#283D3B",
    },
    font: {
      body: "'Montserrat', sans-serif",
      heading: "'Montserrat', sans-serif",
    },
  },
};

export default theme;
