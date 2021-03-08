import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --page-padding: clamp(1.5rem, 5vw, 2rem) clamp(1rem, 5vw, 1.5rem);
    --font-family: ${(props) => props.theme.font.sans};
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: var(--font-family);
    color: ${(props) => props.theme.color.text};
    background: ${(props) => props.theme.color.background};
    transition: color 200ms;
    transition: background 200ms;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }

  h1 {
    font-size: clamp(1.5rem, 3vw, 3rem);
  }
  h2 {
    font-size: clamp(1.25rem, 3vw, 2rem);
  }
  h3 {
    font-size: clamp(1rem, 3vw, 1.25rem);
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.8rem;
  }
  h6 {
    font-size: 0.7rem;
  }
`;

export default GlobalStyle;
