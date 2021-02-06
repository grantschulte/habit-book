import {
  AccountFormActions,
  VALIDATE_FORM,
  VALIDATE_INPUT,
} from "modules/account/accountForm.actions";
import { AccountFormState } from "modules/account/accountForm.types";
import validate from "utils/validation";

export const FIELDS = {
  NEW_PASSWORD: "settings-new-password",
  PASSWORD_CONFIRM: "settings-password-confirm",
};

const updatePasswordFields = {
  [FIELDS.NEW_PASSWORD]: {
    v: "",
    isValid: false,
  },
  [FIELDS.PASSWORD_CONFIRM]: {
    v: "",
    isValid: false,
  },
};

export const initUpdatePasswordState = {
  fields: updatePasswordFields,
  isClean: true,
  isValid: false,
  submitted: false,
};

const updatePasswordReducer = (
  state: AccountFormState,
  action: AccountFormActions
) => {
  switch (action.type) {
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

      const passwordsMatch =
        state.fields[FIELDS.NEW_PASSWORD].v ===
        state.fields[FIELDS.PASSWORD_CONFIRM].v;

      if (!passwordsMatch) {
        formMessage = "Passwords do not match.";
      }

      const formIsValid = allFieldsValid && passwordsMatch;

      return Object.assign({}, state, {
        isValid: formIsValid,
        message: formMessage,
        submitted: true,
      });
    default:
      return state;
  }
};

export default updatePasswordReducer;
