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
      <Route path="*" component={routeConfig.notFound.component} />
    </Switch>
  );
};

export default Routes;
