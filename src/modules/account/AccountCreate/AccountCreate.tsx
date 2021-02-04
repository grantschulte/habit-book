import React, { ChangeEvent, FormEvent, useContext, useReducer } from "react";
import Label from "modules/common/Form/Label";
import Input from "modules/common/Form/Input";
import Form from "modules/common/Form";
import { ThemeContext } from "styled-components";
import PasswordInput from "modules/common/PasswordInput/PasswordInput";
import Button from "modules/common/Button";
import accountCreateReducer, {
  initAccountCreateState,
  CREATE_ACCOUNT_EMAIL,
  CREATE_ACCOUNT_PASSWORD,
} from "./AccountCreate.reducer";
import {
  validateInput,
  validateForm,
} from "modules/account/accountForm.actions";
import InputErrorMessage from "modules/common/Form/Input/InputErrorMessage";
import { ErrorAlert } from "modules/common/Alert";
import AccountPage from "modules/account/AccountCreate/AccountPage";
import Heading from "modules/common/Heading";
import { FormInput } from "modules/account/accountForm.types";

const formInputs: FormInput[] = [
  {
    id: CREATE_ACCOUNT_EMAIL,
    type: "email",
    placeholder: "Email",
    label: "Email",
    required: true,
    Component: Input,
  },
  {
    id: CREATE_ACCOUNT_PASSWORD,
    type: "password",
    placeholder: "Password",
    label: "Password",
    required: true,
    Component: PasswordInput,
  },
];

const AccountCreate = () => {
  const theme = useContext(ThemeContext);
  const [state, dispatch] = useReducer(
    accountCreateReducer,
    initAccountCreateState
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.isValid) {
      dispatch(validateForm());
    } else {
      // dispatch request
    }
  };

  const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(validateInput(e.target));
  };

  return (
    <AccountPage>
      <Heading as="h1">Create Account</Heading>

      {/* validation alerts */}

      {!state.isValid && !state.isClean && state.submitted ? (
        <ErrorAlert message={state.message ?? ""} />
      ) : null}

      {/* request error alerts */}

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

export default AccountCreate;
