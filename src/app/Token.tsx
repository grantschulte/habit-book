import useToken from "hooks/useToken";
import React, { useEffect } from "react";

interface TokenProps {
  children: React.ReactNode;
}

const Token: React.FC<TokenProps> = ({ children }) => {
  const { setToken } = useToken();

  useEffect(() => {
    setToken();
  }, [setToken]);

  return <>{children}</>;
};

export default Token;
