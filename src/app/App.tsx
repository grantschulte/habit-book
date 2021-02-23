import Token from "app/Token";
import withProviders from "hocs/withProviders";
import ScrollToTop from "hooks/ScrollToTop";
import useThemeSelector from "hooks/useThemeSelector";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "./Routes";
import Theme from "./Theme";

const queryClient = new QueryClient();

const Providers: React.FC = withProviders(
  ({ children }: { children: React.ReactNode }) => <>{children}</>
);

const App: React.FC = () => {
  useThemeSelector();

  return (
    <Providers>
      <Token>
        <QueryClientProvider client={queryClient}>
          <Theme>
            <ScrollToTop />
            <GlobalStyle />
            <Routes />
          </Theme>
        </QueryClientProvider>
      </Token>
    </Providers>
  );
};

export default App;
