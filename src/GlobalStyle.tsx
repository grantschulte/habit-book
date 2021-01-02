import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: ${(props) => props.theme.font.body};
    color: ${(props) => props.theme.color.bodyText};
    background: ${(props) => props.theme.color.background};
  }
`;

export default GlobalStyle;
