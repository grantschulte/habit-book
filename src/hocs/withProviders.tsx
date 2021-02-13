import { compose } from "lodash/fp";
import withAuthProvider from "hocs/withAuthProvider";
import withThemeProvider from "hocs/withThemeProvider";
import withHabitHistoryProvider from "hocs/withHabitHistoryProvider";
import withDateProvider from "hocs/withDateProvider";
import withHabitsProvider from "hocs/withHabitsProvider";
import withRouterProvider from "hocs/withRouterProvider";

const withProviders = compose(
  withRouterProvider,
  withAuthProvider,
  withThemeProvider,
  withHabitHistoryProvider,
  withHabitsProvider,
  withDateProvider
);

export default withProviders;
