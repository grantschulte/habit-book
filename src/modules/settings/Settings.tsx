import React, { useContext, useEffect, useState } from "react";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import styled, { ThemeContext } from "styled-components";
// import GeneralSettings from "modules/settings/GeneralSettings";
// import UpdatePasswordSettings from "modules/settings/UpdatePasswordSettings";
import { Col, Row } from "modules/common/Grid";
import { useAuth0 } from "@auth0/auth0-react";
import useRequest from "hooks/useRequest";
import { Redirect } from "react-router-dom";
import routes from "config/routes";
import Input from "modules/common/Form/Input";
import Label from "modules/common/Form/Label";
import Button from "modules/common/Button";

const SettingsPage = styled(Page)`
  padding-top: 6rem;

  @media screen and (max-width: 768px) {
    padding: clamp(1rem, 5vw, 1.5rem);
  }
`;

const Settings = () => {
  const theme = useContext(ThemeContext);
  const { request, makeRequest } = useRequest();
  const [token, setToken] = useState("");
  const {
    user,
    isLoading,
    isAuthenticated,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
      const accessToken = await getAccessTokenSilently({
        audience,
        scope: process.env.REACT_APP_AUTH0_SCOPE,
      });
      setToken(accessToken);
    };

    if (!isLoading && isAuthenticated) {
      getToken();
    }
  }, [isLoading, isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/private";

    if (token) {
      makeRequest(apiUrl, "get", token);
    }
  }, [makeRequest, token]);

  if (isLoading) {
    return <div>Loading Template...</div>;
  }

  const handleSignOut = () => {
    logout({ returnTo: `${window.location.origin}${routes.homepage.path}` });
  };

  return isAuthenticated ? (
    <SettingsPage>
      <Row center="xs">
        <Col xs sm={8} md={6} lg={4}>
          <Heading as="h1">Account Settings</Heading>
        </Col>
      </Row>

      <Row center="xs" style={{ marginBottom: theme.spacing[8] }}>
        <Col xs sm={8} md={6} lg={4}>
          <Label value="Email" htmlFor="settings-email">
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

      <Row center="xs" style={{ marginBottom: theme.spacing[8] }}>
        <Col xs sm={8} md={6} lg={4}>
          <Button buttonType="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Col>
      </Row>

      {/* <GeneralSettings /> */}
      {/* <UpdatePasswordSettings /> */}
    </SettingsPage>
  ) : (
    <Redirect to={routes.homepage.path} />
  );
};

export default Settings;
