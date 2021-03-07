import { RootState } from "app/rootReducer";
import theme from "config/theme";
import useSystemTheme from "hooks/useSystemTheme";
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

interface IThemeProps {
  children: React.ReactNode;
}

const Theme: React.FC<IThemeProps> = ({ children }) => {
  const { currentTheme } = useSelector((state: RootState) => state.themes);
  const systemTheme = useSystemTheme();
  let key = currentTheme === "system" ? systemTheme : currentTheme;

  return (
    <ThemeProvider theme={theme[key as keyof typeof theme]}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
