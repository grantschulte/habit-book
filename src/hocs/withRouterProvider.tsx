import React from "react";
import { Router } from "Router";
import { history } from "hocs/withAuthProvider";

const withRouterProvider = <P extends object>(
  WrappedComponent: React.FunctionComponent<P>
) => {
  return (props: P) => (
    <Router history={history}>
      <WrappedComponent {...(props as P)} />
    </Router>
  );
};

export default withRouterProvider;
