import useFontSelector from "hooks/useFontSelector";
import React from "react";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  useFontSelector();
  return <div>{children}</div>;
};

export default Layout;
