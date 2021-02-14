import { compose } from "lodash/fp";
import withAuthProvider from "hocs/withAuthProvider";
import withHabitHistoryProvider from "hocs/withHabitHistoryProvider";
import withDateProvider from "hocs/withDateProvider";
import withHabitsProvider from "hocs/withHabitsProvider";
import withRouterProvider from "hocs/withRouterProvider";
import withSetThemeProvider from "hocs/withSetThemeProvider";

const withProviders = compose(
  withRouterProvider,
  withAuthProvider,
  withHabitHistoryProvider,
  withHabitsProvider,
  withDateProvider,
  withSetThemeProvider
);

export default withProviders;
