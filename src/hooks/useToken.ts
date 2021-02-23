import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

const useToken = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        scope: process.env.REACT_APP_AUTH0_SCOPE,
      });
      setToken(accessToken);
    };
    getToken();
  });

  const getToken = async () => {
    return await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: process.env.REACT_APP_AUTH0_SCOPE,
    });
  };

  return { token, getToken };
};

export default useToken;
