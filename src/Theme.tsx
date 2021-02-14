import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "config/theme";
import { useSetTheme } from "context/SetThemeContext";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const { themeName } = useSetTheme();

  return (
    <ThemeProvider theme={theme[themeName as keyof typeof theme]}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
