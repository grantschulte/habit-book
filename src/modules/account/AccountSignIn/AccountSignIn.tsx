import React, { ChangeEvent, FormEvent, useContext, useReducer } from "react";
import AccountPage from "modules/account/AccountCreate/AccountPage";
import Heading from "modules/common/Heading";
import accountSignInReducer, {
  CREATE_SIGN_IN_EMAIL,
  CREATE_SIGN_IN_PASSWORD,
  initAccountSignInState,
} from "modules/account/AccountSignIn/AccountSignIn.reducer";
import {
  validateForm,
  validateInput,
} from "modules/account/accountForm.actions";
import Input from "modules/common/Form/Input";
import PasswordInput from "modules/common/PasswordInput/PasswordInput";
import Button from "modules/common/Button";
import Form from "modules/common/Form";
import InputErrorMessage from "modules/common/Form/Input/InputErrorMessage";
import Label from "modules/common/Form/Label";
import { FormInput } from "modules/account/accountForm.types";
import { ThemeContext } from "styled-components";
import { ErrorAlert } from "modules/common/Alert";

const formInputs: FormInput[] = [
  {
    id: CREATE_SIGN_IN_EMAIL,
    type: "email",
    placeholder: "Email",
    label: "Email",
    required: true,
    Component: Input,
  },
  {
    id: CREATE_SIGN_IN_PASSWORD,
    type: "password",
    placeholder: "Password",
    label: "Password",
    required: true,
    Component: PasswordInput,
  },
];

const AccountSignIn = () => {
  const theme = useContext(ThemeContext);
  const [state, dispatch] = useReducer(
    accountSignInReducer,
    initAccountSignInState
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(validateForm());
  };

  const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(validateInput(e.target));
  };

  return (
    <AccountPage>
      <Heading as="h1">Sign In</Heading>

      {!state.isValid && !state.isClean && state.submitted ? (
        <ErrorAlert message={state.message ?? ""} />
      ) : null}

      <Form onSubmit={handleSubmit}>
        {formInputs.map((input) => {
          const field = state.fields[input.id];
          return (
            <div style={{ marginBottom: theme.spacing[4] }} key={input.id}>
              <Label htmlFor={input.id} value={input.label}>
                {!field.isValid && state.submitted ? (
                  <InputErrorMessage>{field.message}</InputErrorMessage>
                ) : null}

                <input.Component
                  id={input.id}
                  type={input.type}
                  onChange={handleValidate}
                  value={field.v}
                  placeholder={input.placeholder}
                  isValid={field.isValid}
                  required={input.required}
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

export default AccountSignIn;