import useHabitEvents from "hooks/useHabitEvents";
import { Col, Row } from "lib/Grid";
import { InfoAlert } from "modules/common/Alert";
import dayjs from "modules/common/Date";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import getStatusBarWidth from "modules/today/status-bar.util";
import TodayEmptyState from "modules/today/TodayEmptyState";
import StatusBar from "modules/today/TodayListStatusBar";
import TodaySkeleton from "modules/today/TodaySkeleton";
import React, { useEffect, useState } from "react";
import TodayHabitList from "./components/TodayHabitList";

const Today: React.FC = () => {
  const { allHabitEvents, status } = useHabitEvents();
  const [alert, setAlert] = useState(false);
  const statusBarWidth = getStatusBarWidth(allHabitEvents);
  const date = dayjs();

  useEffect(() => {
    const allDone = allHabitEvents.every((h) => h.done);
    setAlert(allDone);
  }, [allHabitEvents]);

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Heading as="h1" styleAs="h2">
            {date.format("dddd, MMMM D")}
          </Heading>

          {status === "fetching" && <TodaySkeleton />}

          {status === "success" && allHabitEvents.length === 0 && (
            <TodayEmptyState />
          )}

          {status === "success" && allHabitEvents.length > 0 && (
            <>
              <StatusBar width={statusBarWidth} />
              {alert && (
                <InfoAlert
                  message="Congratulations. You've completed all of your habits today."
                  title="All done!"
                />
              )}
              <TodayHabitList habits={allHabitEvents} />
            </>
          )}
        </Col>
      </Row>
    </Page>
  );
};

export default Today;
