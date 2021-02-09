import useRequest from "hooks/useRequest";
import { REQUEST_STATUS } from "hooks/useRequest.reducer";
import {
  validateForm,
  validateInput,
} from "modules/account/accountForm.actions";
import { ErrorAlert, SuccessAlert } from "modules/common/Alert";
import Button from "modules/common/Button";
import InputErrorMessage from "modules/common/Form/Input/InputErrorMessage";
import Label from "modules/common/Form/Label";
import Heading from "modules/common/Heading";
import PasswordInput from "modules/common/PasswordInput/PasswordInput";
import updatePasswordReducer, {
  initUpdatePasswordState,
  FIELDS,
} from "modules/settings/UpdatePassword.reducer";
import React, { useContext, useEffect, useReducer } from "react";
import { Row, Col } from "react-styled-flexboxgrid";
import { ThemeContext } from "styled-components";

const API_URL = "http://localhost:5000/habits";

const UpdatePasswordSettings = () => {
  const theme = useContext(ThemeContext);
  const { request, makeRequest } = useRequest();
  const [state, dispatch] = useReducer(
    updatePasswordReducer,
    initUpdatePasswordState
  );

  // submit form if valid

  useEffect(() => {
    console.log("effect run");
    if (state.isValid && state.submitted) {
      makeRequest(API_URL);
    }
  }, [state.isValid, state.submitted, makeRequest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(validateInput(e.target));
  };

  const handleSubmit = () => {
    if (state.isClean) {
      return;
    }

    dispatch(validateForm());
  };

  return (
    <>
      <Row center="xs">
        <Col xs sm={8} md={6} lg={4}>
          <Heading as="h3">Password</Heading>

          {/* validation alerts */}

          {!state.isValid && !state.isClean && state.submitted ? (
            <ErrorAlert message={state.message ?? ""} />
          ) : null}

          {/* request error alerts */}

          {request.status === REQUEST_STATUS.ERROR && request.error ? (
            <ErrorAlert message={request.error.message} />
          ) : null}

          {/* success */}

          {request.status === REQUEST_STATUS.SUCCESS && request.data ? (
            <SuccessAlert title="Success!" message="Password updated." />
          ) : null}

          <Label
            htmlFor={FIELDS.NEW_PASSWORD}
            value="New Password"
            style={{ marginBottom: theme.spacing[4] }}
          >
            {!state.fields[FIELDS.NEW_PASSWORD].isValid && state.submitted ? (
              <InputErrorMessage>
                {state.fields[FIELDS.NEW_PASSWORD].message}
              </InputErrorMessage>
            ) : null}

            <PasswordInput
              id={FIELDS.NEW_PASSWORD}
              name={FIELDS.NEW_PASSWORD}
              value={state.fields[FIELDS.NEW_PASSWORD].v}
              placeholder="New Password"
              onChange={handleInputChange}
              showVisibilityToggle
            />
          </Label>

          <Label
            htmlFor={FIELDS.PASSWORD_CONFIRM}
            value="Confirm New Password"
            style={{ marginBottom: theme.spacing[4] }}
          >
            {!state.fields[FIELDS.PASSWORD_CONFIRM].isValid &&
            state.submitted ? (
              <InputErrorMessage>
                {state.fields[FIELDS.PASSWORD_CONFIRM].message}
              </InputErrorMessage>
            ) : null}

            <PasswordInput
              id={FIELDS.PASSWORD_CONFIRM}
              name={FIELDS.PASSWORD_CONFIRM}
              value={state.fields[FIELDS.PASSWORD_CONFIRM].v}
              placeholder="Confirm New Password"
              onChange={handleInputChange}
              showVisibilityToggle
            />
          </Label>
        </Col>
      </Row>

      <Row center="xs" style={{ marginBottom: theme.spacing[8] }}>
        <Col xs sm={8} md={6} lg={4}>
          <Button buttonType="secondary" onClick={handleSubmit}>
            Update Password
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default UpdatePasswordSettings;
