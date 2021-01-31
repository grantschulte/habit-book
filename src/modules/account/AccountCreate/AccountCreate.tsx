import React, { FormEvent, useContext } from "react";
import { Col } from "react-styled-flexboxgrid";
import Page from "modules/common/Page";
import Heading from "modules/common/Heading";
import Label from "modules/common/Form/Label";
import Input from "modules/common/Form/Input";
import Form from "modules/common/Form";
import { ThemeContext } from "styled-components";
import PasswordInput from "modules/common/PasswordInput/PasswordInput";
import Button from "modules/common/Button";

const AccountCreate = () => {
  const theme = useContext(ThemeContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // const handleValidate = () => {
  //   // dispatch form validation
  // };

  return (
    <Page center>
      <Col xs sm={8} md={6} lg={4}>
        <Heading as="h1">Create Account</Heading>

        <Form onSubmit={handleSubmit}>
          <div style={{ marginBottom: theme.spacing[4] }}>
            <Label for="create-account-email" value="Email">
              <Input id="create-account-email" type="email" />
            </Label>
          </div>

          <div style={{ marginBottom: theme.spacing[6] }}>
            <Label for="create-account-password" value="Password">
              <PasswordInput
                showVisibilityToggle
                id="create-account-password"
              />
            </Label>
          </div>

          <Button buttonType="secondary">Submit</Button>
        </Form>
      </Col>
    </Page>
  );
};

export default AccountCreate;
