import React from "react";
import { Switch, Route } from "react-router-dom";

import RouteConfig from "../route-config";
import TodayPage from "./Today/TodayPage";
import ScorecardPage from "./Scorecard/ScorecardPage";
import HabitPage from "./HabitsPage/HabitsPage";
import StyleguidePage from "./Styleguide/StyleguidePage";
import DashboardPage from "./Dashboard/DashboardPage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RouteConfig.dashboard.path}>
        <DashboardPage />
      </Route>
      <Route path={RouteConfig.today.path}>
        <TodayPage />
      </Route>
      <Route path={RouteConfig.scorecard.path}>
        <ScorecardPage />
      </Route>
      <Route path={RouteConfig.habits.path}>
        <HabitPage />
      </Route>
      <Route path={RouteConfig.settings.path}></Route>
      <Route path="/styleguide">
        <StyleguidePage />
      </Route>
    </Switch>
  );
};

export default Routes;
