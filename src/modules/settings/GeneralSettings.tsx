import useRequest from "hooks/useRequest";
import {
  validateForm,
  validateInput,
} from "modules/account/accountForm.actions";
import { ErrorAlert, SuccessAlert } from "modules/common/Alert";
import Button from "modules/common/Button";
import Input from "modules/common/Form/Input";
import InputErrorMessage from "modules/common/Form/Input/InputErrorMessage";
import Label from "modules/common/Form/Label";
import Heading from "modules/common/Heading";
import settingsReducer, {
  initSettingsState,
  FIELDS,
} from "modules/settings/Settings.reducer";
import React, { useContext, useEffect, useReducer } from "react";
import { Row, Col } from "react-styled-flexboxgrid";
import { ThemeContext } from "styled-components";

const API_URL = "http://localhost:5000/habits";

const GeneralSettings = () => {
  const theme = useContext(ThemeContext);
  const [state, dispatch] = useReducer(settingsReducer, initSettingsState);
  const { request, status, makeRequest } = useRequest();

  // submit form if valid

  useEffect(() => {
    if (state.isValid && state.submitted) {
      console.log("submitted");
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
          <Heading as="h3">General</Heading>

          {/* validation alerts */}

          {!state.isValid && !state.isClean && state.submitted ? (
            <ErrorAlert message={state.message ?? ""} />
          ) : null}

          {/* request error alerts */}

          {request.status === status.ERROR && request.message ? (
            <ErrorAlert message={request.message} />
          ) : null}

          {/* success */}

          {request.status === status.SUCCESS && request.data ? (
            <SuccessAlert title="Success!" message="Settings updated." />
          ) : null}

          <Label
            htmlFor="settings-email"
            value="Email"
            style={{ marginBottom: theme.spacing[4] }}
          >
            {!state.fields[FIELDS.EMAIL].isValid && state.submitted ? (
              <InputErrorMessage>
                {state.fields[FIELDS.EMAIL].message}
              </InputErrorMessage>
            ) : null}

            <Input
              id="settings-email"
              name="settings-email"
              type="email"
              value={state.fields[FIELDS.EMAIL].v}
              placeholder="Email"
              onChange={handleInputChange}
            />
          </Label>
        </Col>
      </Row>

      <Row center="xs" style={{ marginBottom: theme.spacing[8] }}>
        <Col xs sm={8} md={6} lg={4}>
          <Button buttonType="secondary" onClick={handleSubmit}>
            Update Settings
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default GeneralSettings;
