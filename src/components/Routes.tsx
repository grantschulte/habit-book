import React from "react";
import { Switch, Route } from "react-router-dom";
import TodayView from "./TodayView";
import RouteConfig from "../route-config";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RouteConfig.home.path}>
        <TodayView></TodayView>
      </Route>
      <Route path={RouteConfig.scores.path}>Scores</Route>
      <Route path={RouteConfig.settings.path}>Settings</Route>
    </Switch>
  );
};

export default Routes;
