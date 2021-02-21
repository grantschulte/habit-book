import useHabitEvents from "hooks/useHabitEvents";
import { Col, Row } from "lib/Grid";
import { InfoAlert } from "modules/common/Alert";
import Page from "modules/common/Page";
import TodayHeading from "modules/today/components/TodayHeading";
import getStatusBarWidth from "modules/today/status-bar.util";
import TodayEmptyState from "modules/today/TodayEmptyState";
import StatusBar from "modules/today/TodayListStatusBar";
import TodaySkeleton from "modules/today/TodaySkeleton";
import React, { useEffect, useState } from "react";
import { RequestStatus } from "types";
import TodayHabitList from "./components/TodayHabitList";

const Today: React.FC = () => {
  const { activeHabitEvents, status } = useHabitEvents();
  // const { allHabits } = useSelector((state: RootState) => state.habits);
  const [alert, setAlert] = useState(false);
  const statusBarWidth = getStatusBarWidth(activeHabitEvents);
  // const showRefresh = activeHabitEvents.length === 0 && allHabits.length > 0;
  const showRefresh = true;

  useEffect(() => {
    const allDone = activeHabitEvents.every((h) => h.done);
    setAlert(allDone);
  }, [activeHabitEvents]);

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <TodayHeading showRefresh={showRefresh} />

          {status === RequestStatus.Fetching && <TodaySkeleton />}

          {status === RequestStatus.Success &&
            activeHabitEvents.length === 0 && (
              <TodayEmptyState showRefresh={showRefresh} />
            )}

          {status === RequestStatus.Success && activeHabitEvents.length > 0 && (
            <>
              <StatusBar width={statusBarWidth} />
              {alert && (
                <InfoAlert
                  message="Congratulations. You've completed all of your habits today. See you tomorrow."
                  title="All done!"
                />
              )}
              <TodayHabitList habits={activeHabitEvents} />
            </>
          )}
        </Col>
      </Row>
    </Page>
  );
};

export default Today;
