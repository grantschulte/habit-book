import {
  AccountCreateActions,
  CLEAR_FORM,
  VALIDATE_FORM,
  VALIDATE_INPUT,
} from "modules/account/AccountCreate/AccountCreate.actions";
import validate from "utils/validation";

export type FormElementField = {
  v: string;
  isValid?: boolean;
  message?: string;
};

export const CREATE_ACCOUNT_EMAIL = "create-account-email";
export const CREATE_ACCOUNT_PASSWORD = "create-account-password";

export type AccountCreateState = {
  fields: {
    [key: string]: any;
  };
  isClean: boolean;
  isValid: boolean;
  message?: string;
  submitted: boolean;
};

export const accountCreateFields = {
  [CREATE_ACCOUNT_EMAIL]: {
    v: "",
  },
  [CREATE_ACCOUNT_PASSWORD]: {
    v: "",
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
  state: AccountCreateState,
  action: AccountCreateActions
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
