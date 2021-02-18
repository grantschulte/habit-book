import { compose } from "lodash/fp";
import WithAuthProvider from "hocs/withAuthProvider";
import withRouterProvider from "hocs/withRouterProvider";

const withProviders = compose(withRouterProvider, WithAuthProvider);

export default withProviders;
