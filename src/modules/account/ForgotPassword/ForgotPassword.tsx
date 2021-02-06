import React, { ChangeEvent, useContext, useEffect, useReducer } from "react";
import Form from "modules/common/Form";
import Heading from "modules/common/Heading";
import Input from "modules/common/Form/Input";
import Label from "modules/common/Form/Label";
import Button from "modules/common/Button";
import { ThemeContext } from "styled-components";
import AccountPage from "modules/account/AccountCreate/AccountPage";
import forgotPasswordReducer, {
  initForgotPasswordFormState,
} from "modules/account/ForgotPassword/ForgotPassword.reducer";
import {
  validateForm,
  validateInput,
} from "modules/account/accountForm.actions";
import { ErrorAlert, SuccessAlert } from "modules/common/Alert";
import useRequest from "hooks/useRequest";

const API_URL = "http://localhost:5000/habits";

const ForgotPassword = () => {
  const theme = useContext(ThemeContext);
  const { request, status, makeRequest } = useRequest();
  const [state, dispatch] = useReducer(
    forgotPasswordReducer,
    initForgotPasswordFormState
  );

  useEffect(() => {
    if (state.isValid) {
      makeRequest(API_URL);
    }
  }, [state.isValid, makeRequest]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(validateForm());
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(validateInput(e.target));
  };

  return (
    <AccountPage>
      <Heading as="h1">Forgot Password</Heading>

      {/* validation errors */}
      {!state.isValid && !state.isClean && state.submitted ? (
        <ErrorAlert message={state.message ?? ""} />
      ) : null}

      {/* request errors */}

      {request.status === status.ERROR && request.message ? (
        <ErrorAlert message={request.message} />
      ) : null}

      {request.status === status.SUCCESS && request.data ? (
        <SuccessAlert
          title="Success!"
          message="An email has been sent to the address you've provided. Follow the instructions to reset your password."
        />
      ) : (
        <>
          <p>
            Enter your email address. We'll send an email to reset your
            password.
          </p>

          {!state.isValid && !state.isClean && state.submitted ? (
            <ErrorAlert message={state.message ?? ""} />
          ) : null}

          <Form onSubmit={handleSubmit}>
            <div style={{ marginBottom: theme.spacing[4] }}>
              <Label value="Email" htmlFor="forgot-password-email">
                <Input
                  id="forgot-password-email"
                  name="forgot-password-email"
                  type="email"
                  value={state.fields["forgot-password-email"].v}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </Label>
            </div>

            <Button buttonType="secondary">Submit</Button>
          </Form>
        </>
      )}
    </AccountPage>
  );
};

export default ForgotPassword;
