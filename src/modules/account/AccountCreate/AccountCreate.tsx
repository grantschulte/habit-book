import React, { useContext } from "react";
import { Row, Col } from "react-styled-flexboxgrid";
import Page from "modules/common/Page";
import Heading from "modules/common/Heading";
import Label from "modules/common/Form/Label";
import Input from "modules/common/Form/Input";
import Form from "modules/common/Form";
import { ThemeContext } from "styled-components";
import PasswordInput from "modules/common/Form/PasswordInput";
import Button from "modules/common/Button";

const AccountCreate = () => {
  const theme = useContext(ThemeContext);

  const onSubmit = () => {
    // dispatch form submission
  };

  // const onValidate = () => {
  //   // dispatch form validation
  // };

  return (
    <Page center>
      <Col lg={3}>
        <Heading as="h1">Create Account</Heading>

        <Form onSubmit={onSubmit}>
          <Row style={{ marginBottom: theme.spacing[6] }}>
            <Col lg>
              <Label for="create-account-email" value="Email">
                <Input id="create-account-email" type="email" noMax />
              </Label>
            </Col>
          </Row>

          <Row style={{ marginBottom: theme.spacing[6] }}>
            <Col lg>
              <Label for="create-account-password" value="Password">
                <PasswordInput
                  showVisibilityToggle
                  id="create-account-password"
                  noMax
                />
              </Label>
            </Col>
          </Row>

          <Row>
            <Col lg>
              <Button buttonType="secondary">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Page>
  );
};

export default AccountCreate;
