import { useAuth0 } from "@auth0/auth0-react";
import { setUserToken } from "app/App.slice";
import { RootState } from "app/rootReducer";
import { Col, Row } from "lib/Grid";
import { InfoAlert } from "modules/common/Alert";
import dayjs from "modules/common/Date";
import Heading from "modules/common/Heading";
import Page from "modules/common/Page";
import { fetchHabitEvents } from "./Today.slice";
import TodayEmptyState from "modules/today/TodayEmptyState";
import StatusBar from "modules/today/TodayListStatusBar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodayHabitList from "./components/TodayHabitList";

const Today: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.app.token);
  const { allHabitEvents } = useSelector((state: RootState) => state.today);
  const { getAccessTokenSilently } = useAuth0();
  const [alert, setAlert] = useState(false);
  const doneCount = allHabitEvents.reduce((a, b) => {
    return b.done ? a + 1 : a;
  }, 0);
  const percentageDone = Math.ceil((doneCount / allHabitEvents.length) * 100);
  const percentageDoneString = `${percentageDone}%`;
  const date = dayjs();

  useEffect(() => {
    if (token) {
      dispatch(fetchHabitEvents());
    }
  }, [dispatch, token]);

  useEffect(() => {
    const setToken = async () => {
      const token = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        scope: process.env.REACT_APP_AUTH0_SCOPE,
      });
      dispatch(setUserToken({ token }));
    };
    setToken();
  }, [dispatch, getAccessTokenSilently]);

  useEffect(() => {
    const allDone = allHabitEvents.every((h) => h.done);
    setAlert(allDone);
  }, [allHabitEvents]);

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          {allHabitEvents.length ? (
            <>
              <Heading as="h1" styleAs="h2">
                {date.format("dddd, MMMM D")}
              </Heading>

              <StatusBar width={percentageDoneString} />

              {alert && (
                <InfoAlert
                  message="Congratulations. You've completed all of your habits today."
                  title="All done!"
                />
              )}

              <TodayHabitList habits={allHabitEvents} />
            </>
          ) : (
            <TodayEmptyState />
          )}
        </Col>
      </Row>
    </Page>
  );
};

export default Today;
