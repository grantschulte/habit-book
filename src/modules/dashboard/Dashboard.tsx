import useStats from "hooks/useStats";
import { Col, Row } from "lib/Grid";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import Skeleton from "modules/common/Skeleton";
import StatsTable from "modules/dashboard/components/ReportCardTable/ReportCardTable";
import Score from "modules/dashboard/components/Score";
import React from "react";
import styled, { useTheme } from "styled-components";

const Section = styled.div`
  /* margin-bottom: ${({ theme }) => theme.spacing[4]}; */
`;

const Card = styled.div`
  border: 2px solid ${(props) => props.theme.color.backgroundAlt};
  padding: 1rem;
  height: 100%;
`;

const DashboardPage: React.FC = () => {
  const { data, isLoading, isSuccess } = useStats();
  const theme = useTheme();

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={10} lg={8}>
          <Heading as="h1" styleAs="h2">
            Dashboard
          </Heading>

          {isLoading && (
            <div>
              <Skeleton size="xl" />
            </div>
          )}

          {isSuccess ? (
            <>
              <Section>
                <Row>
                  <Col
                    xs={12}
                    sm={6}
                    style={{ marginBottom: theme.spacing[4] }}
                  >
                    <Card>
                      <Heading as="h4">Streaks</Heading>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    sm={6}
                    style={{ marginBottom: theme.spacing[4] }}
                  >
                    <Card>
                      <Heading as="h4">Score</Heading>
                      <Score score={data.score} />
                    </Card>
                  </Col>
                </Row>
              </Section>

              <Section style={{ marginBottom: theme.spacing[4] }}>
                <Card>
                  <Heading as="h4">Report Card</Heading>
                  <StatsTable stats={data} />
                </Card>
              </Section>
            </>
          ) : null}
        </Col>
      </Row>
    </Page>
  );
};

export default DashboardPage;
