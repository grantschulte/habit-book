import useLocalStorage from "hooks/useLocalStorage";
import React from "react";
import { useCallback, useState } from "react";

const DEFAULT_THEME = "light";

interface ThemeContextProps {
  setTheme: (name: string) => void;
  themeName: string;
}

const SetThemeContext = React.createContext<ThemeContextProps>({
  setTheme: () => null,
  themeName: DEFAULT_THEME,
});

export const SetThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const THEME_KEY = "theme";
  const { getItem, setItem } = useLocalStorage();
  const [themeName, setThemeName] = useState(
    getItem(THEME_KEY) || DEFAULT_THEME
  );

  const setTheme = useCallback(
    (name: string) => {
      setThemeName(name);
      setItem(THEME_KEY, name);
    },
    [setItem]
  );

  return (
    <SetThemeContext.Provider
      value={{
        setTheme,
        themeName,
      }}
    >
      {children}
    </SetThemeContext.Provider>
  );
};

export const useSetTheme = () => {
  const context = React.useContext(SetThemeContext);
  if (context === undefined) {
    throw new Error("useSetTheme must be used within a SetThemeProvider");
  }
  return context;
};

export default SetThemeContext;
