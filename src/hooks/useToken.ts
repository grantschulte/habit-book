import { useAuth0 } from "@auth0/auth0-react";
import { setUserToken } from "app/App.slice";
import { RootState } from "app/rootReducer";
import { useDispatch, useSelector } from "react-redux";

const useToken = () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const token = useSelector((state: RootState) => state.app.token);

  const setToken = async () => {
    const token = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: process.env.REACT_APP_AUTH0_SCOPE,
    });
    dispatch(setUserToken({ token }));
  };

  return { setToken, token };
};

export default useToken;
