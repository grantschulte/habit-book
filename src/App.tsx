import React from "react";
import { ThemeProvider } from "styled-components";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, useHistory } from "Router";
import theme from "config/theme";
import ScrollToTop from "effects/ScrollToTop";
import Routes from "./Routes";
import { DateProvider } from "context/DateContext";
import { HabitProvider } from "context/HabitContext";
import { HabitHistoryProvider } from "context/HabitHistoryContext";
import GlobalStyle from "modules/common/GlobalStyle";
import routes from "config/routes";

const AUTH0_REDIRECT_URI = `${window.location.origin}${routes.today.path}`;

const App: React.FC = () => {
  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    // Use the router's history module to replace the url
    history.replace(appState?.returnTo || window.location.pathname);
  };

  return (
    <Router>
      <ScrollToTop />
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
        redirectUri={AUTH0_REDIRECT_URI}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE}
        scope={process.env.REACT_APP_AUTH0_SCOPE}
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
