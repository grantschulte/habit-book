import React from "react";
import { Switch, Route, RouteComponentProps } from "Router";
import routes from "config/routes";
import DefaultLayout from "modules/common/Layout/Layout";

type RouteWithLayoutProps = {
  exact?: boolean;
  path: string;
  component: React.FunctionComponent<RouteComponentProps>;
  layout?: React.FunctionComponent<RouteComponentProps>;
};

export const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
  path,
  exact,
  component: Component,
  layout: Layout = DefaultLayout,
}: RouteWithLayoutProps) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const Routes: React.FC = () => {
  return (
    <Switch>
      {Object.values(routes).map((route) => {
        return (
          <RouteWithLayout
            exact={route.path === "/"}
            path={route.path}
            component={route.component}
            layout={route.layout}
            key={route.name}
          />
        );
      })}
      <RouteWithLayout path="*" component={routes.notFound.component} />
    </Switch>
  );
};

export default Routes;
