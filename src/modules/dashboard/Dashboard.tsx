import useStats from "hooks/useStats";
import { Col, Row } from "lib/Grid";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const DashboardPage: React.FC = () => {
  const { data, isLoading, isSuccess } = useStats();

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={10} lg={10}>
          <Heading as="h1" styleAs="h2">
            Dashboard
          </Heading>

          {isLoading && <div>Stats Loading...</div>}

          {isSuccess ? <Section>{data.events.toString()}</Section> : null}
        </Col>
      </Row>
    </Page>
  );
};

export default DashboardPage;
