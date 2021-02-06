import React from "react";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import styled from "styled-components";
import GeneralSettings from "modules/settings/GeneralSettings";
import UpdatePasswordSettings from "modules/settings/UpdatePasswordSettings";
import { Col, Row } from "modules/common/Grid";

const SettingsPage = styled(Page)`
  padding-top: 6rem;

  @media screen and (max-width: 768px) {
    padding: clamp(1rem, 5vw, 1.5rem);
  }
`;

const Settings = () => {
  return (
    <SettingsPage>
      <Row center="xs">
        <Col xs sm={8} md={6} lg={4}>
          <Heading as="h1">Account Settings</Heading>
        </Col>
      </Row>
      <GeneralSettings />
      <UpdatePasswordSettings />
    </SettingsPage>
  );
};

export default Settings;
