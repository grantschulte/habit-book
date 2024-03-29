import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row } from "lib/Grid";
import Button from "modules/common/Button";
import Heading from "modules/common/Heading";
import LoadingIcon from "modules/common/LoadingIcon";
import Page from "modules/common/Page";
import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import content from "config/content.json";
import { BiUser } from "lib/Icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { resetAppError } from "app/App.slice";
import { WarningAlert } from "modules/common/Alert";

const Homepage = () => {
  const theme = useContext(ThemeContext);
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.app.error);
  const [loading, setLoading] = useState(false);

  const handleSignInClick = () => {
    setLoading(true);
    dispatch(resetAppError());
    loginWithRedirect({
      prompt: "login",
    });
  };

  return (
    <Page>
      <Row center="xs" middle="xs" style={{ height: "100%" }}>
        <Col xs sm={8} md={6} lg={4}>
          {error ? (
            <WarningAlert
              title={content.signOutMessageTitle}
              message={content.signOutMessage}
              style={{ marginBottom: "2rem" }}
            />
          ) : null}

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
              <BiUser size="1.25rem" style={{ marginRight: "0.5rem" }} />
              {content.createAccountSignIn}
            </Button>
          </div>
        </Col>
      </Row>
    </Page>
  );
};

export default Homepage;
