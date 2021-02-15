import withProviders from "hocs/withProviders";
import ScrollToTop from "hooks/ScrollToTop";
import { getThemeFromStorage } from "modules/settings/ThemeSelector/ThemeSelector.slice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "./Routes";
import Theme from "./Theme";

const Providers: React.FC = withProviders(
  ({ children }: { children: React.ReactNode }) => <>{children}</>
);

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThemeFromStorage());
  }, [dispatch]);

  return (
    <Providers>
      <Theme>
        <ScrollToTop />
        <GlobalStyle />
        <Routes />
      </Theme>
    </Providers>
  );
};

export default App;
