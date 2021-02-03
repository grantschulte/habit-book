import FullWidthRow from "modules/common/Layout/FullWidthRow";
import Page from "modules/common/Page";
import React from "react";
import { Col } from "react-styled-flexboxgrid";

const AccountPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Page center>
      <FullWidthRow center="xs">
        <Col xs sm={8} md={6} lg={4}>
          {children}
        </Col>
      </FullWidthRow>
    </Page>
  );
};

export default AccountPage;
