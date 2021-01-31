import {
  AccountCreateActions,
  CLEAR_FORM,
  VALIDATE_INPUT,
} from "modules/account/AccountCreate/AccountCreate.actions";

export type FormElementValue = {
  id: string;
  value: any;
  isValid: boolean;
  message: string;
};

export type AccountCreateState = {
  values: {
    [prop: string]: FormElementValue;
  };
  isClean: true;
  isValid: false;
  message: string;
};

const accountCreateReducer = (
  state: AccountCreateState,
  action: AccountCreateActions
) => {
  switch (action.type) {
    case CLEAR_FORM:
      break;
    case VALIDATE_INPUT:
      break;
    default:
      return;
  }
};

export default accountCreateReducer;
