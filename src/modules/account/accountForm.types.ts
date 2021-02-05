export type FormElementField = {
  v: string;
  isValid?: boolean;
  message?: string;
};

export type AccountFormState = {
  fields: {
    [key: string]: FormElementField;
  };
  isClean: boolean;
  isValid: boolean;
  message?: string;
  submitted: boolean;
};

export type FormInput = {
  id: string;
  type: "email" | "password";
  placeholder: string;
  label: string;
  required?: boolean;
  Component: any;
};
