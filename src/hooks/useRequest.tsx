import { useCallback, useReducer } from "react";
import {
  requestError,
  requestFetch,
  requestSuccess,
} from "hooks/useRequest.actions";
import useRequestReducer, {
  initUseRequestState,
  REQUEST_STATUS,
} from "hooks/useRequest.reducer";

const useRequest = () => {
  const [request, dispatch] = useReducer(
    useRequestReducer,
    initUseRequestState
  );

  const makeRequest = useCallback(
    async (url: string, method: string = "get", token?: string) => {
      dispatch(requestFetch());

      const headers = token
        ? new Headers({
            Authorization: `Bearer ${token}`,
          })
        : {};

      try {
        const response = await fetch(url, {
          method: method.toUpperCase(),
          headers,
        });
        const json = await response.json();
        console.log(json);
        dispatch(requestSuccess(json));
      } catch (error) {
        dispatch(requestError(error.toString()));
      }
    },
    [dispatch]
  );

  return { request, makeRequest, status: REQUEST_STATUS };
};

export default useRequest;
