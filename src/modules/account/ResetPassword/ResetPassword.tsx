import React, { useContext, useReducer } from "react";
import AccountPage from "modules/account/AccountCreate/AccountPage";
import Heading from "modules/common/Heading";
import Form from "modules/common/Form";
import Label from "modules/common/Form/Label";
import { ThemeContext } from "styled-components";
import Button from "modules/common/Button";
import PasswordInput from "modules/common/PasswordInput/PasswordInput";
import resetPasswordReducer, {
  FIELD_NAMES,
  initResetPasswordFormState,
} from "./ResetPassword.reducer";
import {
  validateForm,
  validateInput,
} from "modules/account/accountForm.actions";
import InputErrorMessage from "modules/common/Form/Input/InputErrorMessage";
import { ErrorAlert } from "modules/common/Alert";

const inputs = [
  {
    id: FIELD_NAMES.PASSWORD,
    type: "password",
    label: "Password",
    required: true,
    placeholder: "Password",
    Component: PasswordInput,
  },
  {
    id: FIELD_NAMES.PASSWORD_CONFIRM,
    type: "password",
    label: "Password Confirm",
    required: true,
    placeholder: "Password Confirm",
    Component: PasswordInput,
  },
];

const ResetPassword = () => {
  const theme = useContext(ThemeContext);
  const [state, dispatch] = useReducer(
    resetPasswordReducer,
    initResetPasswordFormState
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.isValid) {
      dispatch(validateForm());
    } else {
      // dispatch form submit request
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(validateInput(e.target));
  };

  return (
    <AccountPage>
      <Heading as="h1">Reset Password</Heading>

      {!state.isValid && state.message && state.submitted ? (
        <ErrorAlert message={state.message} />
      ) : null}

      <Form onSubmit={handleSubmit}>
        {inputs.map((input) => {
          const field = state.fields[input.id];

          return (
            <div style={{ marginBottom: theme.spacing[4] }} key={input.id}>
              <Label htmlFor={input.id} value={input.label}>
                {!field.isValid && field.message && state.submitted ? (
                  <InputErrorMessage>{field.message}</InputErrorMessage>
                ) : null}

                <input.Component
                  id={input.id}
                  placeholder={input.placeholder}
                  required={input.required}
                  onChange={handleChange}
                  value={field.v}
                  isValid={field.isValid}
                />
              </Label>
            </div>
          );
        })}
        <Button buttonType="secondary">Submit</Button>
      </Form>
    </AccountPage>
  );
};

export default ResetPassword;
