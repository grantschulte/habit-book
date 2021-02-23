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
import { HabitEvent } from "types";
import TodayHabitList from "./components/TodayHabitList";

const Today: React.FC = () => {
  const { data, isLoading, isSuccess } = useHabitEvents();
  const [alert, setAlert] = useState(false);
  const statusBarWidth = getStatusBarWidth(data);
  const showRefresh = true;

  useEffect(() => {
    const allDone = data ? data.every((h: HabitEvent) => h.done) : false;
    setAlert(allDone);
  }, [data]);

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <TodayHeading showRefresh={showRefresh} />

          {isLoading && <TodaySkeleton />}

          {isSuccess && !data?.length && (
            <TodayEmptyState showRefresh={showRefresh} />
          )}

          {isSuccess && data && data.length > 0 && (
            <>
              <StatusBar width={statusBarWidth} />
              {alert && (
                <InfoAlert
                  message="Congratulations. You've completed all of your habits today. See you tomorrow."
                  title="All done!"
                />
              )}
              <TodayHabitList habits={data} />
            </>
          )}
        </Col>
      </Row>
    </Page>
  );
};

export default Today;
