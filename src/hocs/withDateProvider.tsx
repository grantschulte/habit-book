import React from "react";
import { DateProvider } from "context/DateContext";

const withDateProvider = <P extends object>(
  WrappedComponent: React.FunctionComponent<P>
) => {
  return (props: P) => (
    <DateProvider>
      <WrappedComponent {...(props as P)} />
    </DateProvider>
  );
};

export default withDateProvider;
