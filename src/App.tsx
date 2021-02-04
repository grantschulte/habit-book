import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "Router";
import theme from "config/theme";
import ScrollToTop from "effects/ScrollToTop";
import Routes from "./Routes";
import { DateProvider } from "context/DateContext";
import { HabitProvider } from "context/HabitContext";
import { HabitHistoryProvider } from "context/HabitHistoryContext";
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
        <DateProvider>
          <HabitHistoryProvider>
            <HabitProvider>
              <>
                <GlobalStyle />
                <AppWrapper>
                  <Menu />
                  <Logo />
                  <MainContent>
                    <Routes />
                  </MainContent>
                </AppWrapper>
              </>
            </HabitProvider>
          </HabitHistoryProvider>
        </DateProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
