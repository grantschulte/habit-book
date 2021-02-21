import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

const useToken = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getToken = useCallback(async () => {
    return getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: process.env.REACT_APP_AUTH0_SCOPE,
    });
  }, [getAccessTokenSilently]);

  return { getToken };
};

export default useToken;
