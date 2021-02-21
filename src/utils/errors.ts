import { ResponseError } from "types";

const makeAppError = (error: string) => {
  switch (error) {
    case ResponseError.Unauthorized:
      return {
        type: error,
        message:
          "We don't recognize you. Please refresh our memory by logging out and back in.",
      };
    case ResponseError.BadRequest:
      return {
        type: error,
        message:
          "Something is wrong and we're not quite sure what it is. Please refresh the page or check back later.",
      };
    case ResponseError.InternalServerError:
      return {
        type: error,
        message:
          "Something is wrong and we're not quite sure what it is. Please refresh the page or check back later.",
      };
    default:
      return {
        type: error,
        message:
          "Something is wrong and we're not quite sure what it is. Please refresh the page or check back later.",
      };
  }
};

export default makeAppError;
