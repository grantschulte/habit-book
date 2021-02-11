import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      background: string;
      success: string;
      successBackground: string;
      error: string;
      errorBackground: string;
      warning: string;
      warningBackground: string;
      info: string;
      infoBackground: string;
      white: string;
      black: string;
      tableBackground: string;
      grey: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      red: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      yellow: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      green: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      orange: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
    };
    font: {
      body: string;
      heading: string;
      display: string;
    };
    fontWeight: {
      100: number;
      200: number;
      300: number;
      400: number;
      500: number;
      600: number;
      700: number;
      800: number;
      900: number;
    };
    button: {
      [buttonType: string]: {
        background: string;
        text: string;
      };
    };
    borderWidth: {
      1: string;
      2: string;
    };
    borderRadii: {
      1: string;
      2: string;
      3: string;
      4: string;
    };
    spacing: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
    };
    borderWeight: {
      solid: "solid";
    };
  }
}
