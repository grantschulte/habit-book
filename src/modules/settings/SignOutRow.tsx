import { useAuth0 } from "@auth0/auth0-react";
import content from "config/content.json";
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
    logout({
      returnTo: `${window.location.origin}${process.env.REACT_APP_HOMEPAGE_URL}`,
    });
  };

  return (
    <Row>
      <Col xs>
        <Label value="Sign Out">
          <Button size="sm" onClick={handleSignOut}>
            {loading && (
              <LoadingIcon size="1.25rem" style={{ marginRight: "0.5rem" }} />
            )}
            {content.signOut}
          </Button>
        </Label>
      </Col>
    </Row>
  );
};

export default SignOutRow;
