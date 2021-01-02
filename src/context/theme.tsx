import "styled-components";
import { DefaultTheme } from "styled-components";

type Theme = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

const theme: Theme = {
  light: {
    color: {
      primary: "#2AB7CA",
      secondary: "#FE4A49",
      tertiary: "#FED766",
      bodyText: "#222222",
      background: "#F4F4F8",
      success: "#22D386",
      error: "#BF1A2F",
    },
    font: {
      body: "'Montserrat', sans-serif",
      heading: "'Montserrat', sans-serif",
    },
  },
  dark: {
    color: {
      primary: "#FB8500",
      secondary: "#219EBC",
      tertiary: "#FFB703",
      bodyText: "#8ECAE6",
      background: "#023047",
      success: "#26A96C",
      error: "#DA1B2B",
    },
    font: {
      body: "'Montserrat', sans-serif",
      heading: "'Montserrat', sans-serif",
    },
  },
};

export default theme;
