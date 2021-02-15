import { RootState } from "app/rootReducer";
import { Col, Row } from "lib/Grid";
import { InfoAlert } from "modules/common/Alert";
import Page from "modules/common/Page";
import StatusBar from "modules/today/TodayListStatusBar";
import { fetchHabits } from "modules/habits/Habits.slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateDisplay from "./components/DateDisplay";
import TodayHabitList from "./components/TodayHabitList";

const Today: React.FC = () => {
  const dispatch = useDispatch();
  const { allHabits } = useSelector((state: RootState) => state.habits);
  const [alert, setAlert] = useState(false);
  const doneCount = allHabits.reduce((a, b) => {
    return b.done ? a + 1 : a;
  }, 0);
  const percentageDone = Math.ceil((doneCount / allHabits.length) * 100);
  const percentageDoneString = `${percentageDone}%`;

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  useEffect(() => {
    const allDone = allHabits.every((h) => h.done);
    setAlert(allDone);
  }, [allHabits]);

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <DateDisplay />

          <StatusBar width={percentageDoneString} />

          {alert && (
            <InfoAlert
              message="Congratulations. You've completed all of your habits today."
              title="All done!"
            />
          )}

          <TodayHabitList habits={allHabits} />
        </Col>
      </Row>
    </Page>
  );
};

export default Today;
