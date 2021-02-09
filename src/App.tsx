import React from "react";
import { ThemeProvider } from "styled-components";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { Router } from "Router";
import { createBrowserHistory } from "history";
import theme from "config/theme";
import ScrollToTop from "effects/ScrollToTop";
import Routes from "./Routes";
import { DateProvider } from "context/DateContext";
import { HabitProvider } from "context/HabitContext";
import { HabitHistoryProvider } from "context/HabitHistoryContext";
import GlobalStyle from "modules/common/GlobalStyle";
import routes from "config/routes";

export const history = createBrowserHistory();
const AUTH0_REDIRECT_URI = `${window.location.origin}${routes.homepage.path}`;

const App: React.FC = () => {
  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo ?? routes.today.path);
  };

  return (
    <Router history={history}>
      <ScrollToTop />
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE}
        scope={process.env.REACT_APP_AUTH0_SCOPE}
        redirectUri={AUTH0_REDIRECT_URI}
        onRedirectCallback={onRedirectCallback}
      >
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
      </Auth0Provider>
    </Router>
  );
};

export default App;
