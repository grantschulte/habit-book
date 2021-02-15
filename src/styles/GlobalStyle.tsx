import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: ${(props) => props.theme.font.body};
    color: ${(props) => props.theme.color.text};
    background: ${(props) => props.theme.color.background};
    transition: color 200ms;
    transition: background 200ms;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`;

export default GlobalStyle;
