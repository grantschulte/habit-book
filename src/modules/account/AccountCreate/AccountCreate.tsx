import React, { ChangeEvent, FormEvent, useContext, useReducer } from "react";
import { Col } from "react-styled-flexboxgrid";
import Page from "modules/common/Page";
import Heading from "modules/common/Heading";
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
} from "modules/account/AccountCreate/AccountCreate.actions";

type FormInput = {
  id: string;
  type: "email" | "password";
  placeholder: string;
  Component: any;
};

const formInputs: FormInput[] = [
  {
    id: CREATE_ACCOUNT_EMAIL,
    type: "email",
    placeholder: "Email",
    Component: Input,
  },
  {
    id: CREATE_ACCOUNT_PASSWORD,
    type: "password",
    placeholder: "Password",
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
    dispatch(validateForm());
  };

  const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(validateInput(e.target));
  };

  console.log(state);

  return (
    <Page center>
      <Col xs sm={8} md={6} lg={4}>
        <Heading as="h1">Create Account</Heading>

        <Form onSubmit={handleSubmit}>
          {formInputs.map((input) => {
            return (
              <div style={{ marginBottom: theme.spacing[4] }} key={input.id}>
                <Label for={input.id} value="Email">
                  <input.Component
                    id={input.id}
                    type={input.type}
                    onChange={handleValidate}
                    value={state.fields[input.id].v}
                    placeholder={input.placeholder}
                    isValid={state.fields[input.id].isValid}
                  />
                </Label>

                {state.fields[input.id].isValid
                  ? null
                  : state.fields[input.id].message}
              </div>
            );
          })}

          <Button buttonType="secondary">Submit</Button>
        </Form>
      </Col>
    </Page>
  );
};

export default AccountCreate;
