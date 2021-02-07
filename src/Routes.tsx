import React from "react";
import { Switch, Route } from "Router";
import routes from "config/routes";
import { RouteComponentProps } from "react-router-dom";
import DefaultLayout from "modules/common/Layout/Layout";

type RouteWithLayoutProps = {
  exact?: boolean;
  path: string;
  component?: React.FunctionComponent<RouteComponentProps>;
  layout?: React.FunctionComponent<RouteComponentProps>;
  children?: React.ReactNode;
};

export const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
  path,
  exact,
  component: Component,
  layout: Layout = DefaultLayout,
  children,
}: RouteWithLayoutProps) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <Layout {...props}>
          {Component ? <Component {...props} /> : { children }}
        </Layout>
      )}
    />
  );
};

const Routes: React.FC = () => {
  return (
    <Switch>
      {Object.values(routes).map((route) => (
        <RouteWithLayout
          exact={route.path === "/"}
          path={route.path}
          component={route.component}
          layout={route.layout}
          key={route.name}
        />
      ))}
      <RouteWithLayout path="*" component={routes.notFound.component} />
    </Switch>
  );
};

export default Routes;
