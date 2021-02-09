import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeContext } from "styled-components";
import Button from "modules/common/Button";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import { Col } from "modules/common/Grid";
import FullWidthRow from "modules/common/FullWidthRow";
import routes from "config/routes";

const Homepage = () => {
  const theme = useContext(ThemeContext);
  const { loginWithRedirect } = useAuth0();

  const handleSignInClick = () => {
    loginWithRedirect();
  };

  return (
    <Page center>
      <FullWidthRow center="xs">
        <Col xs sm={8} md={6} lg={4}>
          <Heading as="h1">HabitBook</Heading>

          <div style={{ marginTop: theme.spacing[4] }}>
            <Button as="a" href={routes.accountCreate.path}>
              Create Account
            </Button>
          </div>

          <div style={{ marginTop: theme.spacing[4] }}>
            <Button onClick={handleSignInClick}>Sign In</Button>
          </div>
        </Col>
        <Col></Col>
      </FullWidthRow>
    </Page>
  );
};

export default Homepage;
