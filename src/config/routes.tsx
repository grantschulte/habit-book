import AccountCreate from "modules/account/AccountCreate/AccountCreate";
import Dashboard from "modules/dashboard";
import Habits from "modules/habits";
import Scorecard from "modules/scorecard";
import Styleguide from "modules/styleguide";
import Today from "modules/today";

type Route = {
  name: string;
  path: string;
  isExternal?: boolean;
  title: string;
  component?: React.FunctionComponent;
};

type RouteConfig = {
  [route: string]: Route;
};

const routes: RouteConfig = {
  accountCreate: {
    name: "account-create",
    path: "/account/create",
    title: "Create Account",
    component: AccountCreate,
  },
  dashboard: {
    name: "dashboard",
    path: "/",
    title: "Dashboard",
    component: Dashboard,
  },
  habits: {
    name: "habits",
    path: "/habits",
    title: "Habits",
    component: Habits,
  },
  today: {
    name: "today",
    path: "/today",
    title: "Today",
    component: Today,
  },
  scorecard: {
    name: "scorecard",
    path: "/scorecard",
    title: "Scorecard",
    component: Scorecard,
  },
  settings: {
    name: "settings",
    path: "/settings",
    title: "Settings",
  },
  styleguide: {
    name: "styleguide",
    path: "/styleguide",
    title: "Styleguide",
    component: Styleguide,
  },
};

type PageTitleMapping = {
  [path: string]: string;
};

export const PageTitleMappings: PageTitleMapping = (() => {
  const mapping: PageTitleMapping = {};

  for (let prop in routes) {
    const obj: Route = routes[prop];
    mapping[obj.path] = obj.title;
  }

  return mapping;
})();

export default routes;
