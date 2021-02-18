import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Col, Row } from "lib/Grid";
import Button from "modules/common/Button";
import Label from "modules/common/Form/Label";
import Input from "modules/common/Input";
import { User } from "@auth0/auth0-react/dist/auth-state";

const EmailRow = ({ user }: { user: User }) => {
  const theme = useContext(ThemeContext);

  return (
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
        <Button buttonType="primary" size="sm">
          Update Email
        </Button>
      </Col>
    </Row>
  );
};

export default EmailRow;
