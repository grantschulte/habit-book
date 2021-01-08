import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { DateProvider } from "./context/DateContext";
import { HabitProvider } from "./context/HabitContext";
import { HabitHistoryProvider } from "./context/HabitHistoryContext";
import theme from "./context/theme";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Routes from "./components/Routes";
import GlobalStyle from "./GlobalStyle";
import ScrollToTop from "./effects/ScrollToTop";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 0.25fr 8fr 1fr;
  height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  grid-column: 2 / 3;
  grid-row: 1 / 4;

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
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
              <Menu></Menu>
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
