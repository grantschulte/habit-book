import { compose } from "lodash/fp";
import withAuthProvider from "hocs/withAuthProvider";
import withDateProvider from "hocs/withDateProvider";
import withRouterProvider from "hocs/withRouterProvider";

const withProviders = compose(
  withRouterProvider,
  withAuthProvider,
  withDateProvider
);

export default withProviders;
