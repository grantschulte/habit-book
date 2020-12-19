import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { DateProvider } from "./context/date-context";
import theme from "./context/theme";
import Header from "./components/Header";
import TodayView from "./components/TodayView";

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

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <AppWrapper>
        <DateProvider>
          <Header></Header>
          <MainContent>
            <TodayView></TodayView>
          </MainContent>
        </DateProvider>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
