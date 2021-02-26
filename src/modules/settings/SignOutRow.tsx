import { useAuth0 } from "@auth0/auth0-react";
import routes from "config/routes";
import { Col, Row } from "lib/Grid";
import Button from "modules/common/Button";
import Label from "modules/common/Form/Label";
import LoadingIcon from "modules/common/LoadingIcon";
import React, { useState } from "react";

const SignOutRow = () => {
  const { logout } = useAuth0();
  const [loading, setLoading] = useState(false);

  const handleSignOut = () => {
    setLoading(true);
    logout({ returnTo: `${window.location.origin}${routes.homepage.path}` });
  };

  return (
    <Row>
      <Col xs>
        <Label value="Sign Out">
          <Button size="sm" onClick={handleSignOut}>
            {loading && (
              <LoadingIcon size="1.25rem" style={{ marginRight: "0.5rem" }} />
            )}
            Click to sign out
          </Button>
        </Label>
      </Col>
    </Row>
  );
};

export default SignOutRow;
