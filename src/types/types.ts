export type RequestStatus = "idle" | "fetching" | "success" | "failed";

export type RequestError = {
  error: string;
  message: string;
};

export type FlexRowProps = {
  flexGrow?: number;
  flexBasis?: number;
};
