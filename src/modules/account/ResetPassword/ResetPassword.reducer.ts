import {
  AccountFormActions,
  CLEAR_FORM,
  VALIDATE_FORM,
  VALIDATE_INPUT,
} from "modules/account/accountForm.actions";
import { AccountFormState } from "modules/account/accountForm.types";
import validate from "utils/validation";

export const PASSWORD = "reset-password-password";
export const PASSWORD_CONFIRM = "reset-password-password-confirm";

export const FIELD_NAMES = {
  PASSWORD,
  PASSWORD_CONFIRM,
};

const resetPasswordFormFields = {
  [FIELD_NAMES.PASSWORD]: {
    v: "",
    isValid: undefined,
    message: undefined,
  },
  [FIELD_NAMES.PASSWORD_CONFIRM]: {
    v: "",
    isValid: undefined,
    message: undefined,
  },
};

export const initResetPasswordFormState = {
  fields: resetPasswordFormFields,
  message: "",
  isValid: false,
  isClean: true,
  submitted: false,
};

const resetPasswordReducer = (
  state: AccountFormState,
  action: AccountFormActions
) => {
  switch (action.type) {
    case CLEAR_FORM:
      return initResetPasswordFormState;

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

      const fieldsMatch =
        state.fields[FIELD_NAMES.PASSWORD].v ===
        state.fields[FIELD_NAMES.PASSWORD_CONFIRM].v;

      if (!fieldsMatch) {
        formMessage = "Passwords do not match. Please try again.";
      }

      return Object.assign({}, state, {
        isValid: allFieldsValid && fieldsMatch,
        message: formMessage,
        submitted: true,
      });
    default:
      return state;
  }
};

export default resetPasswordReducer;
