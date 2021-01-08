import React from "react";
import { Switch, Route } from "react-router-dom";

import RouteConfig from "../route-config";
import TodayPage from "./TodayPage";
import HistoryPage from "./HistoryPage";
import HabitPage from "./HabitPage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RouteConfig.home.path}>
        <TodayPage></TodayPage>
      </Route>
      <Route path={RouteConfig.scoreboard.path}>
        <HistoryPage></HistoryPage>
      </Route>
      <Route path={RouteConfig.habits.path}>
        <HabitPage></HabitPage>
      </Route>
      <Route path={RouteConfig.settings.path}>Settings</Route>
    </Switch>
  );
};

export default Routes;
