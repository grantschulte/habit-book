import {
  AccountFormActions,
  CLEAR_FORM,
  VALIDATE_FORM,
  VALIDATE_INPUT,
} from "modules/account/accountForm.actions";
import { AccountFormState } from "modules/account/accountForm.types";

export const CREATE_SIGN_IN_EMAIL = "create-sign-in-email";
export const CREATE_SIGN_IN_PASSWORD = "create-sign-in-password";

export const accountSignInFields = {
  [CREATE_SIGN_IN_EMAIL]: {
    v: "",
  },
  [CREATE_SIGN_IN_PASSWORD]: {
    v: "",
  },
};

export const initAccountSignInState = {
  fields: accountSignInFields,
  isClean: true,
  isValid: false,
  message: undefined,
  submitted: false,
};

const accountSignInReducer = (
  state: AccountFormState,
  action: AccountFormActions
) => {
  switch (action.type) {
    case CLEAR_FORM:
      return initAccountSignInState;

    case VALIDATE_INPUT:
      return Object.assign({}, state, {
        fields: {
          ...state.fields,
          [action.id]: {
            v: action.value,
            isValid: true,
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

export default accountSignInReducer;
