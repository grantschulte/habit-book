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

const SettingsPage = styled(Page)`
  /* padding-top: 6rem; */
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
    <SettingsPage>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Heading as="h2">Account Settings</Heading>
        </Col>
      </Row>

      <Row style={{ marginBottom: theme.spacing[8] }}>
        <Col xs sm={12} md={8} lg={6}>
          <Label value="Update Email" htmlFor="settings-email">
            <Input
              id="settings-email"
              name="settings-email"
              type="text"
              disabled
              value={user.email}
            />
          </Label>
        </Col>
      </Row>

      <Row style={{ marginBottom: theme.spacing[8] }}>
        <Col xs sm={12} md={8} lg={6}>
          <Button buttonType="secondary" size="md" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Col>
      </Row>
    </SettingsPage>
  ) : (
    <Redirect to={routes.homepage.path} />
  );
};

export default Settings;
