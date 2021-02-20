import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import routes from "config/routes";
import { Col, Row } from "lib/Grid";
import Button from "modules/common/Button";
import Label from "modules/common/Form/Label";

const SignOutRow = () => {
  const { logout } = useAuth0();

  const handleSignOut = () => {
    logout({ returnTo: `${window.location.origin}${routes.homepage.path}` });
  };

  return (
    <Row>
      <Col xs>
        <Label value="Sign Out">
          <Button buttonType="primary" size="sm" onClick={handleSignOut}>
            Click to sign out
          </Button>
        </Label>
      </Col>
    </Row>
  );
};

export default SignOutRow;
