import React from "react";
import { Switch, Route } from "react-router-dom";

import RouteConfig from "../route-config";
import TodayPage from "./TodayPage";
import ScorecardPage from "./Scorecard/ScorecardPage";
import HabitPage from "./HabitsPage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RouteConfig.dashboard.path}>
        {/* <TodayPage></TodayPage> */}
      </Route>
      <Route path={RouteConfig.today.path}>
        <TodayPage></TodayPage>
      </Route>
      <Route path={RouteConfig.scorecard.path}>
        <ScorecardPage></ScorecardPage>
      </Route>
      <Route path={RouteConfig.habits.path}>
        <HabitPage></HabitPage>
      </Route>
      <Route path={RouteConfig.settings.path}></Route>
    </Switch>
  );
};

export default Routes;