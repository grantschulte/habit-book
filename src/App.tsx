import React from "react";
import Routes from "./Routes";
import withProviders from "hocs/withProviders";
import ScrollToTop from "effects/ScrollToTop";
import GlobalStyle from "styles/GlobalStyle";

const Providers: React.FC = withProviders(
  ({ children }: { children: React.ReactNode }) => <>{children}</>
);

const App: React.FC = () => {
  return (
    <Providers>
      <ScrollToTop />
      <GlobalStyle />
      <Routes />
    </Providers>
  );
};

export default App;
