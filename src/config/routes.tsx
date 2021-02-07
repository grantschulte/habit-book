import AccountCreate from "modules/account/AccountCreate/AccountCreate";
import AccountSignIn from "modules/account/AccountSignIn";
import ForgotPassword from "modules/account/ForgotPassword/ForgotPassword";
import ResetPassword from "modules/account/ResetPassword/ResetPassword";
import LayoutUser from "modules/common/Layout/LayoutUser";
import DefaultLayout from "modules/common/Layout";
import Dashboard from "modules/dashboard";
import Habits from "modules/habits";
import Homepage from "modules/homepage";
import NotFound from "modules/NotFound";
import Scorecard from "modules/scorecard";
import Settings from "modules/settings/Settings";
import Styleguide from "modules/styleguide";
import Today from "modules/today";

export type IRoute = {
  name: string;
  path: string;
  isExternal?: boolean;
  title: string;
  component?: React.FunctionComponent;
  layout?: React.FunctionComponent;
};

export type RouteConfig = {
  [route: string]: IRoute;
};

const routes: RouteConfig = {
  accountCreate: {
    name: "account-create",
    path: "/account/create",
    title: "Create Account",
    component: AccountCreate,
    layout: DefaultLayout,
  },
  accountForgotPassword: {
    name: "account-forgot-password",
    path: "/account/forgot-password",
    title: "Forgot Password",
    component: ForgotPassword,
    layout: DefaultLayout,
  },
  accountResetPassword: {
    name: "account-reset-password",
    path: "/account/reset-password",
    title: "Reset Password",
    component: ResetPassword,
    layout: DefaultLayout,
  },
  accountSignIn: {
    name: "account-sign-in",
    path: "/account/sign-in",
    title: "Sign In",
    component: AccountSignIn,
    layout: DefaultLayout,
  },
  dashboard: {
    name: "dashboard",
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
    layout: LayoutUser,
  },
  habits: {
    name: "habits",
    path: "/habits",
    title: "Habits",
    component: Habits,
    layout: LayoutUser,
  },
  homepage: {
    name: "homepage",
    path: "/",
    title: "Home",
    component: Homepage,
    layout: DefaultLayout,
  },
  notFound: {
    name: "not-found",
    path: "/not-found",
    title: "Not Found",
    component: NotFound,
    layout: DefaultLayout,
  },
  today: {
    name: "today",
    path: "/today",
    title: "Today",
    component: Today,
    layout: LayoutUser,
  },
  scorecard: {
    name: "scorecard",
    path: "/scorecard",
    title: "Scorecard",
    component: Scorecard,
    layout: LayoutUser,
  },
  settings: {
    name: "settings",
    path: "/settings",
    title: "Settings",
    component: Settings,
    layout: LayoutUser,
  },
  styleguide: {
    name: "styleguide",
    path: "/styleguide",
    title: "Styleguide",
    component: Styleguide,
    layout: DefaultLayout,
  },
};

type PageTitleMapping = {
  [path: string]: string;
};

export const PageTitleMappings: PageTitleMapping = (() => {
  const mapping: PageTitleMapping = {};

  for (let prop in routes) {
    const obj: IRoute = routes[prop];
    mapping[obj.path] = obj.title;
  }

  return mapping;
})();

export default routes;
