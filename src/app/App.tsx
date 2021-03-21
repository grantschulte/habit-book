import withProviders from "hocs/withProviders";
import ScrollToTop from "hooks/ScrollToTop";
import useThemeSelector from "hooks/useThemeSelector";
import { ErrorFallback } from "modules/common/Layout/AppError";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "./Routes";
import Theme from "./Theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Providers: React.FC = withProviders(
  ({ children }: { children: React.ReactNode }) => <>{children}</>
);

const App: React.FC = () => {
  useThemeSelector();

  return (
    <Providers>
      <Theme>
        <GlobalStyle />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <QueryClientProvider client={queryClient}>
            <ScrollToTop />
            <Routes />
          </QueryClientProvider>
        </ErrorBoundary>
      </Theme>
    </Providers>
  );
};

export default App;
