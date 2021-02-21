import { RootState } from "app/rootReducer";
import {
  getThemeFromStorage,
  setThemeInStorage,
} from "modules/settings/ThemeSelector/ThemeSelector.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useThemeSelector = () => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: RootState) => state.themes);

  useEffect(() => {
    dispatch(getThemeFromStorage());
  }, [dispatch]);

  const setTheme = (theme: string) => {
    dispatch(setThemeInStorage(theme));
  };

  return { currentTheme, setTheme };
};

export default useThemeSelector;
