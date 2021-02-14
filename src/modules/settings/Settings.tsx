import React, { useContext, useEffect } from "react";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import styled, { ThemeContext } from "styled-components";
import { Col, Row } from "lib/Grid";
import { useAuth0 } from "@auth0/auth0-react";
import useRequest from "hooks/useRequest";
import { Redirect } from "lib/Router";
import routes from "config/routes";
import Input from "modules/common/Input";
import Label from "modules/common/Form/Label";
import Button from "modules/common/Button";

const Section = styled.div`
  margin-bottom: 2rem;
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
                <Label
                  value="Update Email"
                  htmlFor="settings-email"
                  style={{ marginBottom: theme.spacing[4] }}
                >
                  <Input
                    id="settings-email"
                    name="settings-email"
                    type="text"
                    value={user.email}
                    disabled
                  />
                </Label>
                <Button buttonType="primary">Update Email</Button>
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
