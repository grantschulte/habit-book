export const VALIDATE_INPUT = "VALIDATE_INPUT";
export const VALIDATE_FORM = "VALIDATE_FORM";
export const CLEAR_FORM = "CLEAR_FORM";

export type FormValidator = "email" | "password";
export type FormInputValue = string | number;

export type ValidateInput = {
  type: typeof VALIDATE_INPUT;
  id: string;
  value: string;
  inputType: string;
};

export type ValidateForm = {
  type: typeof VALIDATE_FORM;
};

export type ClearForm = {
  type: typeof CLEAR_FORM;
};

export const validateInput = (target: HTMLInputElement): ValidateInput => ({
  type: VALIDATE_INPUT,
  id: target.id,
  value: target.value,
  inputType: target.type,
});

export const validateForm = (): ValidateForm => ({
  type: VALIDATE_FORM,
});

export const clearForm = (): ClearForm => ({
  type: CLEAR_FORM,
});

export type AccountCreateActions = ValidateInput | ValidateForm | ClearForm;
