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
      black: "#222222",
      white: "#F2F2F2",
    },
    font: {
      body: "'Raleway', sans-serif",
      heading: "'Raleway', sans-serif",
      display: "'Lobster', cursive",
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
    form: {
      inputBorder: "#DDDDD",
      inputBackground: "#F2F2F2",
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
      black: "#222222",
      white: "#F2F2F2",
    },
    font: {
      body: "'Raleway', sans-serif",
      heading: "'Raleway', sans-serif",
      display: "'Lobster', cursive",
    },
    button: {
      primary: {
        background: "#FB8500",
        text: "#222222",
      },
      secondary: {
        background: "#219EBC",
        text: "#222222",
      },
      tertiary: {
        background: "#219EBC",
        text: "#222222",
      },
    },
    form: {
      inputBorder: "",
      inputBackground: "",
    },
  },
};

export default theme;
