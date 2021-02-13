import React, { useContext, useEffect } from "react";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import styled, { ThemeContext } from "styled-components";
import { Col, Row } from "modules/common/Grid";
import { useAuth0 } from "@auth0/auth0-react";
import useRequest from "hooks/useRequest";
import { Redirect } from "react-router-dom";
import routes from "config/routes";
import Input from "modules/common/Form/Input";
import Label from "modules/common/Form/Label";
import Button from "modules/common/Button";
import InputCombo from "modules/common/InputCombo";

const Section = styled.div`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  border-radius: ${(props) => props.theme.borderRadii[4]};
  margin-bottom: 2rem;
  padding: 1.5rem;
`;

const Settings = () => {
  const theme = useContext(ThemeContext);
  const { makeRequest } = useRequest();
  const { user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    const apiUrl = "http://localhost:8080/private";
    makeRequest(apiUrl);
  }, [makeRequest]);

  const handleSignOut = () => {
    logout({ returnTo: `${window.location.origin}${routes.homepage.path}` });
  };

  return isAuthenticated ? (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Heading as="h1" styleAs="h2">
            Account Settings
          </Heading>
        </Col>
      </Row>

      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Section>
            <Heading as="h3">General</Heading>

            <Row
              style={{
                marginBottom: theme.spacing[6],
              }}
            >
              <Col xs>
                <Label value="Update Email" htmlFor="settings-email">
                  <InputCombo>
                    <Input
                      id="settings-email"
                      name="settings-email"
                      type="text"
                      disabled
                      value={user.email}
                    />
                    <Button buttonType="primary">Update</Button>
                  </InputCombo>
                </Label>
              </Col>
            </Row>

            <Row>
              <Col xs>
                <Label value="Sign Out">
                  <Button
                    buttonType="primary"
                    size="md"
                    onClick={handleSignOut}
                  >
                    Click to sign out
                  </Button>
                </Label>
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>

      {/* <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Section>
            <Heading as="h3">Dashboard</Heading>
          </Section>
        </Col>
      </Row> */}
    </Page>
  ) : (
    <Redirect to={routes.homepage.path} />
  );
};

export default Settings;
