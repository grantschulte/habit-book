import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row } from "lib/Grid";
import Button from "modules/common/Button";
import Heading from "modules/common/Heading";
import LoadingIcon from "modules/common/LoadingIcon";
import Page from "modules/common/Page";
import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import content from "config/content.json";

const Homepage = () => {
  const theme = useContext(ThemeContext);
  const { loginWithRedirect } = useAuth0();
  const [loading, setLoading] = useState(false);

  const handleSignInClick = () => {
    setLoading(true);
    loginWithRedirect({
      prompt: "login",
    });
  };

  return (
    <Page>
      <Row center="xs" middle="xs" style={{ height: "100%" }}>
        <Col xs sm={8} md={6} lg={4}>
          <Heading as="h1" style={{ textAlign: "center" }}>
            {content.habitBook}
          </Heading>
          <div
            style={{
              marginTop: theme.spacing[4],
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleSignInClick}>
              {loading && (
                <LoadingIcon size="1.25rem" style={{ marginRight: "0.5rem" }} />
              )}
              {content.createAccountSignIn}
            </Button>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Page>
  );
};

export default Homepage;
