import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { DateProvider } from "./context/DateContext";
import { HabitProvider } from "./context/HabitContext";
import { HabitHistoryProvider } from "./context/HabitHistoryContext";
import theme from "./context/theme";
import Header from "./components/Header";
import Routes from "./components/Routes";
import GlobalStyle from "./GlobalStyle";
import ScrollToTop from "./effects/ScrollToTop";

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
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <AppWrapper>
          <DateProvider>
            <HabitHistoryProvider>
              <Header></Header>
              <MainContent>
                <HabitProvider>
                  <Routes />
                </HabitProvider>
              </MainContent>
            </HabitHistoryProvider>
          </DateProvider>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
