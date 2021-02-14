import React, { useContext, useEffect, useReducer } from "react";
import routeConfig from "config/routes";
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
import InputErrorMessage from "modules/common/Input/InputErrorMessage";
import { ErrorAlert, SuccessAlert } from "modules/common/Alert";
import useRequest from "hooks/useRequest";
import StyledLink from "modules/common/StyledLink";
import { REQUEST_STATUS } from "hooks/useRequest.reducer";

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

const API_URL = "http://localhost:5000/habits";

const ResetPassword = () => {
  const theme = useContext(ThemeContext);
  const { request, makeRequest } = useRequest();
  const [state, dispatch] = useReducer(
    resetPasswordReducer,
    initResetPasswordFormState
  );

  // submit form if valid

  useEffect(() => {
    if (state.isValid) {
      makeRequest(API_URL);
    }
  }, [state.isValid, makeRequest]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(validateForm());
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

      {request.status === REQUEST_STATUS.ERROR && request.error ? (
        <ErrorAlert message={request.error.message} />
      ) : null}

      {request.status === REQUEST_STATUS.SUCCESS && request.data ? (
        <>
          <SuccessAlert
            title="Success"
            message="Your password has been updated"
          />
          <StyledLink to={routeConfig.today.path}>
            View Today's Habits
          </StyledLink>
        </>
      ) : (
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

          {request.status === REQUEST_STATUS.FETCHING ? (
            <div>Fetching...</div>
          ) : null}

          <Button buttonType="secondary">Submit</Button>
        </Form>
      )}
    </AccountPage>
  );
};

export default ResetPassword;
