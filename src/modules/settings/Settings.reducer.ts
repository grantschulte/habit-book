import {
  AccountFormActions,
  VALIDATE_FORM,
  VALIDATE_INPUT,
} from "modules/account/accountForm.actions";
import { AccountFormState } from "modules/account/accountForm.types";
import validate from "utils/validation";

export const FIELDS = {
  EMAIL: "settings-email",
};

const settingsFields = {
  [FIELDS.EMAIL]: {
    v: "someuseremail@example.com",
    isValid: true,
  },
};

export const initSettingsState = {
  fields: settingsFields,
  isClean: true,
  isValid: true,
  submitted: false,
};

const settingsReducer = (
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

      return Object.assign({}, state, {
        isValid: allFieldsValid,
        message: formMessage,
        submitted: true,
      });
    default:
      return state;
  }
};

export default settingsReducer;
