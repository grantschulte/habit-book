import { useCallback, useReducer } from "react";
import {
  RequestAction,
  requestError,
  requestFetch,
  requestSuccess,
  REQUEST_ERROR,
  REQUEST_FETCH,
  REQUEST_SUCCESS,
} from "hooks/useRequest.actions";

const REQUEST_STATUS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  FETCHING: "FETCHING",
  IDLE: "IDLE",
};

type RequestState = {
  status:
    | typeof REQUEST_STATUS.SUCCESS
    | typeof REQUEST_STATUS.ERROR
    | typeof REQUEST_STATUS.FETCHING
    | typeof REQUEST_STATUS.IDLE;
  message?: string;
  data?: any;
};

export const initUseRequestState = {
  status: REQUEST_STATUS.IDLE,
  message: undefined,
  data: undefined,
};

const useRequestReducer = (state: RequestState, action: RequestAction) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return Object.assign({}, state, {
        status: REQUEST_STATUS.FETCHING,
        message: undefined,
        data: undefined,
      });
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        status: REQUEST_STATUS.SUCCESS,
        message: undefined,
        data: action.data,
      });
    case REQUEST_ERROR:
      return Object.assign({}, state, {
        status: REQUEST_STATUS.ERROR,
        message: action.message,
        data: undefined,
      });
    default:
      return state;
  }
};

const useRequest = () => {
  const [request, dispatch] = useReducer(
    useRequestReducer,
    initUseRequestState
  );

  const makeRequest = useCallback(
    async (url: string, method: string = "get") => {
      dispatch(requestFetch());

      try {
        const response = await fetch(url, {
          method: method.toUpperCase(),
        });
        const json = await response.json();
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
