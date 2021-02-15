import React, { useEffect } from "react";
import styled from "styled-components";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import { Col, Row } from "lib/Grid";
import useRequest from "hooks/useRequest";
import ThemeSelector from "modules/settings/ThemeSelector/ThemeSelector";
import EmailRow from "modules/settings/EmailRow";
import SignOutRow from "modules/settings/SignOutRow";
import { useAuth0 } from "@auth0/auth0-react";

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Settings = () => {
  const { makeRequest } = useRequest();
  const { user } = useAuth0();

  useEffect(() => {
    const apiUrl = "http://localhost:8080/private";
    makeRequest(apiUrl);
  }, [makeRequest]);

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
