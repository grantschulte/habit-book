import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "Router";

import { DateProvider } from "context/DateContext";
import { HabitProvider } from "context/HabitContext";
import { HabitHistoryProvider } from "context/HabitHistoryContext";
import theme from "config/theme";
import ScrollToTop from "effects/ScrollToTop";
import Routes from "./Routes";
import GlobalStyle from "modules/common/GlobalStyle";
import Logo from "modules/common/Logo";
import Menu from "modules/common/SidebarMenu/SidebarMenu";
import MainContent from "modules/common/Layout/MainContent";
import AppWrapper from "modules/common/Layout/AppWrapper";

const App: React.FC = () => {
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
};

export default App;
