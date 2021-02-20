import { useAuth0 } from "@auth0/auth0-react";
import routes from "config/routes";
import { Col, Row } from "lib/Grid";
import Button from "modules/common/Button";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

const Homepage = () => {
  const theme = useContext(ThemeContext);
  const { loginWithRedirect } = useAuth0();

  const handleSignInClick = () => {
    loginWithRedirect({
      prompt: "login",
      returnTo: routes.today.path,
    });
  };

  return (
    <Page>
      <Row center="xs" middle="xs" style={{ height: "100%" }}>
        <Col xs sm={8} md={6} lg={4}>
          <Heading as="h1" style={{ textAlign: "center" }}>
            HabitBook
          </Heading>
          <div
            style={{
              marginTop: theme.spacing[4],
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleSignInClick}>
              Create Account / Sign In
            </Button>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Page>
  );
};

export default Homepage;
