import React from "react";
import { HabitProvider } from "context/HabitContext";

const withHabitsProvider = <P extends object>(
  WrappedComponent: React.FunctionComponent<P>
) => {
  return (props: P) => (
    <HabitProvider>
      <WrappedComponent {...(props as P)} />
    </HabitProvider>
  );
};

export default withHabitsProvider;
