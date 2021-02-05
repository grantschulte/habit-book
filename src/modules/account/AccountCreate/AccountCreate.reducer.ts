import {
  AccountFormActions,
  CLEAR_FORM,
  VALIDATE_FORM,
  VALIDATE_INPUT,
} from "modules/account/accountForm.actions";
import { AccountFormState } from "modules/account/accountForm.types";
import validate from "utils/validation";

export const CREATE_ACCOUNT_EMAIL = "create-account-email";
export const CREATE_ACCOUNT_PASSWORD = "create-account-password";

export const accountCreateFields = {
  [CREATE_ACCOUNT_EMAIL]: {
    v: "",
    isValid: false,
    message: "",
  },
  [CREATE_ACCOUNT_PASSWORD]: {
    v: "",
    isValid: false,
    message: "",
  },
};

export const initAccountCreateState = {
  fields: accountCreateFields,
  isClean: true,
  isValid: false,
  message: undefined,
  submitted: false,
};

const accountCreateReducer = (
  state: AccountFormState,
  action: AccountFormActions
) => {
  switch (action.type) {
    case CLEAR_FORM:
      return initAccountCreateState;

    case VALIDATE_INPUT:
      const { isValid, message } = validate(action.inputType, action.value);

      return Object.assign({}, state, {
        fields: {
          ...state.fields,
          [action.id]: {
            v: action.value,
            isValid,
            message,
          },
        },
        isClean: false,
      });

    case VALIDATE_FORM:
      let formMessage = "";

      const allFieldsValid = Object.values(state.fields).every(
        (field) => field.isValid
      );

      if (!allFieldsValid) {
        formMessage =
          "This submission contains errors. Please correct them to proceed.";
      }

      return Object.assign({}, state, {
        isValid: allFieldsValid,
        message: formMessage,
        submitted: true,
      });
    default:
      return state;
  }
};

export default accountCreateReducer;
