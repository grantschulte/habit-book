import withProviders from "hocs/withProviders";
import ScrollToTop from "hooks/ScrollToTop";
import useThemeSelector from "hooks/useThemeSelector";
import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "./Routes";
import Theme from "./Theme";

const Providers: React.FC = withProviders(
  ({ children }: { children: React.ReactNode }) => <>{children}</>
);

const App: React.FC = () => {
  useThemeSelector();

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
