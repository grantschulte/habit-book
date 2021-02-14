import Page from "modules/common/Page";
import React from "react";
import { Row, Col } from "lib/Grid";

const AccountPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Page>
      <Row center="xs">
        <Col xs sm={8} md={6} lg={4}>
          {children}
        </Col>
      </Row>
    </Page>
  );
};

export default AccountPage;
