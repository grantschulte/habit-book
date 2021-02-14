import React from "react";
import { SetThemeProvider } from "context/SetThemeContext";

const withSetThemeProvider = <P extends object>(
  WrappedComponent: React.FunctionComponent<P>
) => {
  return (props: P) => (
    <SetThemeProvider>
      <WrappedComponent {...(props as P)} />
    </SetThemeProvider>
  );
};

export default withSetThemeProvider;
