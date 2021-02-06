import {
  RequestAction,
  REQUEST_FETCH,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from "hooks/useRequest.actions";

export const REQUEST_STATUS = {
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

export default useRequestReducer;
