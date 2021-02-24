import { useAuth0 } from "@auth0/auth0-react";
import { setUserToken } from "app/App.slice";
import { RootState } from "app/rootReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useToken = () => {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.app.token);

  useEffect(() => {
    const getToken = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        scope: process.env.REACT_APP_AUTH0_SCOPE,
      });
      dispatch(setUserToken({ token: accessToken }));
    };
    getToken();
  });

  return token;
};

export default useToken;
