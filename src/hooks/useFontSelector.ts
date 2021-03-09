import { setFontStack } from "app/App.slice";
import { LOCAL_STORAGE_FONT_STACK } from "config/constants";
import { FontStack } from "modules/settings/FontSelector/FontSelector";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import * as localStorage from "local-storage";

const useFontSelector = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const setCSSVars = useCallback(
    (fontStack: FontStack) => {
      const root = document.documentElement;
      root.style.setProperty(
        "--font-family",
        theme.font[fontStack as keyof typeof theme.font]
      );
    },
    [theme]
  );

  useEffect(() => {
    const fontStackFromStorage: FontStack = localStorage.get(
      LOCAL_STORAGE_FONT_STACK
    );
    if (fontStackFromStorage) {
      setCSSVars(fontStackFromStorage);
      dispatch(setFontStack({ fontStack: fontStackFromStorage }));
    }
  }, [dispatch, setCSSVars]);

  const onUpdate = useCallback(
    (fontStack: FontStack) => {
      setCSSVars(fontStack);
      localStorage.set(LOCAL_STORAGE_FONT_STACK, fontStack);
      dispatch(setFontStack({ fontStack }));
    },
    [dispatch, setCSSVars]
  );

  return {
    onUpdate,
  };
};

export default useFontSelector;
