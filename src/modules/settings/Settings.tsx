import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row } from "lib/Grid";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import EmailRow from "modules/settings/EmailRow";
import SignOutRow from "modules/settings/SignOutRow";
import ThemeSelector from "modules/settings/ThemeSelector/ThemeSelector";
import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Settings = () => {
  const { user } = useAuth0();

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Heading as="h1" styleAs="h2">
            Account Settings
          </Heading>
        </Col>
      </Row>

      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Section>
            <Heading as="h3">General</Heading>
            <EmailRow user={user} />
            <ThemeSelector />
            <SignOutRow />
          </Section>
        </Col>
      </Row>
    </Page>
  );
};

export default Settings;
