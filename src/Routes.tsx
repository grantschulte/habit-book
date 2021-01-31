import React from "react";
import { Switch, Route } from "Router";
import routeConfig from "config/routes";

const Routes: React.FC = () => {
  return (
    <Switch>
      {Object.values(routeConfig).map((route) => (
        <Route
          exact={route.path === "/"}
          path={route.path}
          component={route.component}
          key={route.name}
        />
      ))}
    </Switch>
  );
};

export default Routes;
