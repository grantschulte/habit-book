import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "config/theme";

const withThemeProvider = <P extends object>(
  WrappedComponent: React.FunctionComponent<P>
) => {
  return (props: P) => (
    <ThemeProvider theme={theme.light}>
      <WrappedComponent {...(props as P)} />
    </ThemeProvider>
  );
};

export default withThemeProvider;
