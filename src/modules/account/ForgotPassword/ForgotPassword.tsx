import React, { ChangeEvent, useContext, useReducer, useState } from "react";
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

type RequestState = {
  status?: string;
  message?: string;
};

const ForgotPassword = () => {
  const theme = useContext(ThemeContext);
  const [requestState, setRequestState] = useState<RequestState>({
    status: "",
    message: "",
  });
  const [state, dispatch] = useReducer(
    forgotPasswordReducer,
    initForgotPasswordFormState
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.isValid) {
      dispatch(validateForm());
    } else {
      // dispatch request
      setRequestState({
        status: "success",
        message:
          "An email has been sent to the address you've provided. Follow the instructions to reset your password.",
      });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(validateInput(e.target));
  };

  return (
    <AccountPage>
      <Heading as="h1">Forgot Password</Heading>

      {requestState.status === "success" && requestState.message ? (
        <>
          <SuccessAlert message={requestState.message} />
          <Button size="sm">Open Email</Button>
        </>
      ) : null}

      {requestState.status === "error" && requestState.message ? (
        <ErrorAlert message={requestState.message} />
      ) : null}

      {requestState.status !== "success" ? (
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
      ) : null}
    </AccountPage>
  );
};

export default ForgotPassword;
