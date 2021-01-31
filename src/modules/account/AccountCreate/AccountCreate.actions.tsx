export const VALIDATE_INPUT = "VALIDATE_INPUT";
export const CLEAR_FORM = "CLEAR_FORM";

export type FormValidator = "email" | "password";

export type ValidateInput = {
  type: typeof VALIDATE_INPUT;
  validator: FormValidator;
  value: string | number;
};

export type ClearForm = {
  type: typeof CLEAR_FORM;
};

export const validateInput = (
  value: string,
  validator: FormValidator
): ValidateInput => ({
  type: VALIDATE_INPUT,
  validator,
  value,
});

export const clearForm = (): ClearForm => ({
  type: CLEAR_FORM,
});

export type AccountCreateActions = ValidateInput | ClearForm;
