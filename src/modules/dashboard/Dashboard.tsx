import useStats from "hooks/useStats";
import { Col, Row } from "lib/Grid";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import Skeleton from "modules/common/Skeleton";
import ReportCardTable from "modules/dashboard/components/ReportCardTable/ReportCardTable";
import Score from "modules/dashboard/components/Score";
import Streaks from "modules/dashboard/components/Streaks";
import React from "react";
import styled, { useTheme } from "styled-components";
import content from "config/content.json";

const Section = styled.div`
  /* margin-bottom: ${({ theme }) => theme.spacing[4]}; */
`;

const Card = styled.div`
  border: 2px solid ${(props) => props.theme.color.backgroundAlt};
  border-radius: ${(props) => props.theme.borderRadii[4]};
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DashboardPage: React.FC = () => {
  const { data, isLoading, isSuccess, isError, error } = useStats();
  const theme = useTheme();

  if (isError) {
    throw error;
  }

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={10} lg={8}>
          <Heading as="h1" styleAs="h2">
            {content.dashboard}
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
                      <Heading as="h4">{content.streaks}</Heading>
                      <Streaks />
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    sm={6}
                    style={{ marginBottom: theme.spacing[4] }}
                  >
                    <Card>
                      <Heading as="h4">{content.score}</Heading>
                      <Score score={data.score} />
                    </Card>
                  </Col>
                </Row>
              </Section>

              {data && (
                <Section style={{ marginBottom: theme.spacing[4] }}>
                  <Card>
                    <Heading as="h4">{content.reportCard}</Heading>
                    <ReportCardTable stats={data} />
                  </Card>
                </Section>
              )}
            </>
          ) : null}
        </Col>
      </Row>
    </Page>
  );
};

export default DashboardPage;
