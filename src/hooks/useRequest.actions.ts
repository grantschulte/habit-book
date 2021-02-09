export const REQUEST_FETCH = "REQUEST_FETCH";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";

type RequestFetch = {
  type: typeof REQUEST_FETCH;
};

type RequestSuccess = {
  type: typeof REQUEST_SUCCESS;
  data: any;
};

type RequestError = {
  type: typeof REQUEST_ERROR;
  error: Error;
};

export type RequestAction = RequestFetch | RequestSuccess | RequestError;

export const requestFetch = (): RequestFetch => ({
  type: REQUEST_FETCH,
});

export const requestSuccess = (data: any): RequestSuccess => ({
  type: REQUEST_SUCCESS,
  data,
});

export const requestError = (error: any): RequestError => ({
  type: REQUEST_ERROR,
  error,
});
