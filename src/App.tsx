import React from "react";
import Routes from "./Routes";
import withProviders from "hocs/withProviders";
import ScrollToTop from "effects/ScrollToTop";
import GlobalStyle from "styles/GlobalStyle";
import Theme from "Theme";

const Providers: React.FC = withProviders(
  ({ children }: { children: React.ReactNode }) => <>{children}</>
);

const App: React.FC = () => {
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
