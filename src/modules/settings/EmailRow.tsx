import { User } from "@auth0/auth0-react/dist/auth-state";
import { Col, Row } from "lib/Grid";
import Label from "modules/common/Form/Label";
import Input from "modules/common/Input";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import content from "config/content.json";

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
          value={content.email}
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
        {/* <Button size="sm">Update Email</Button> */}
      </Col>
    </Row>
  );
};

export default EmailRow;
