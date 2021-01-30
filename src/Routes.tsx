import React from "react";
import { Switch, Route } from "Router";
import RouteConfig from "config/routes";
import TodayPage from "modules/today";
import ScorecardPage from "modules/scorecard";
import HabitPage from "modules/habits";
import StyleguidePage from "modules/styleguide";
import DashboardPage from "modules/dashboard";

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
