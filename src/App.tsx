import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { DateProvider } from "./context/DateContext";
import { HabitProvider } from "./context/HabitContext";
import { HabitHistoryProvider } from "./context/HabitHistoryContext";
import theme from "./constants/theme";
import Logo from "./components/Logo";
import Menu from "./components/Menu/Menu";
import Routes from "./components/Routes";
import GlobalStyle from "./GlobalStyle";
import ScrollToTop from "./effects/ScrollToTop";
// import PageHeading from "./components/PageHeading";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 1fr) 8fr;
  grid-template-rows: 0.5fr 0.5fr 8fr 60px;
  height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  grid-column: 2 / 3;
  grid-row: 2 / 5;

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
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
              <Menu />
              <Logo />
              {/* <PageHeading /> */}
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
