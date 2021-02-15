import { RootState } from "app/rootReducer";
import theme from "config/theme";
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

interface IThemeProps {
  children: React.ReactNode;
}

const Theme: React.FC<IThemeProps> = ({ children }) => {
  const { currentTheme } = useSelector((state: RootState) => state.themes);

  return (
    <ThemeProvider theme={theme[currentTheme as keyof typeof theme]}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
