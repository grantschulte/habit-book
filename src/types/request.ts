export type RequestStatus = "idle" | "fetching" | "success" | "failed";

export type RequestError = {
  error: string;
  message: string;
};
