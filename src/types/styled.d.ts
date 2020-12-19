import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      bodyText: string;
      background: string;
    };
    font: {
      body: string;
      heading: string;
    };
  }
}