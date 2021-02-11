import { useCallback, useReducer } from "react";
import {
  requestError,
  requestFetch,
  requestSuccess,
} from "hooks/useRequest.actions";
import useRequestReducer, {
  initUseRequestState,
} from "hooks/useRequest.reducer";
import { useAuth0 } from "@auth0/auth0-react";

const logRequest = (json: any) => {
  console.log(json);
};

const useRequest = () => {
  const [request, dispatch] = useReducer(
    useRequestReducer,
    initUseRequestState
  );
  const { getAccessTokenSilently } = useAuth0();

  const makeRequest = useCallback(
    async (url: string, opts?: any) => {
      dispatch(requestFetch());

      try {
        const token = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          scope: process.env.REACT_APP_AUTH0_SCOPE,
        });

        const response = await fetch(url, {
          ...opts,
          headers: {
            ...opts?.headers,
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await response.json();

        logRequest(json);

        dispatch(requestSuccess(json));
      } catch (error) {
        dispatch(requestError(error as Error));
      }
    },
    [dispatch, getAccessTokenSilently]
  );

  return { request, makeRequest };
};

export default useRequest;
