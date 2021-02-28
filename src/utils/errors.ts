import { ResponseError } from "types";
import content from "config/content.json";

const makeAppError = (error: string) => {
  switch (error) {
    case ResponseError.Unauthorized:
      return {
        type: error,
        message: content.unauthorizedMessage,
      };
    case ResponseError.BadRequest:
      return {
        type: error,
        message: content.errorGenericMessage,
      };
    case ResponseError.InternalServerError:
      return {
        type: error,
        message: content.errorGenericMessage,
      };
    default:
      return {
        type: error,
        message: content.errorGenericMessage,
      };
  }
};

export default makeAppError;
