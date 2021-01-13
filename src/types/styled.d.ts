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
      error: string;
      warning: string;
      info: string;
      black: string;
      white: string;
    };
    font: {
      body: string;
      heading: string;
      display: string;
    };
    button: {
      [buttonType: string]: {
        background: string;
        text: string;
      };
    };
    form: {
      inputBorder: string;
      inputBackground: string;
    };
  }
}
