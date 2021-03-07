import useMediaQuery from "hooks/useMediaQuery";

const useSystemTheme = () => {
  const match = useMediaQuery("(prefers-color-scheme: light)");
  return match ? "light" : "dark";
};

export default useSystemTheme;
