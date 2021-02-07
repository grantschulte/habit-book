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
                <Routes />
              </>
            </HabitProvider>
          </HabitHistoryProvider>
        </DateProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
