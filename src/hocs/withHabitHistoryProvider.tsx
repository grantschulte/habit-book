import React from "react";
import { HabitHistoryProvider } from "context/HabitHistoryContext";

const withHabitHistoryProvider = <P extends object>(
  WrappedComponent: React.FunctionComponent<P>
) => {
  return (props: P) => (
    <HabitHistoryProvider>
      <WrappedComponent {...(props as P)} />
    </HabitHistoryProvider>
  );
};

export default withHabitHistoryProvider;
