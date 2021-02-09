import routeComponents from "./routes.pages";

export type IRoute = {
  name: string;
  path: string;
  isExternal?: boolean;
  title: string;
  protected?: boolean;
  component: React.FunctionComponent;
  layout?: React.FunctionComponent;
};

export type RouteConfig = {
  [route: string]: IRoute;
};

const routes: RouteConfig = {
  // accountCreate: {
  //   name: "account-create",
  //   path: "/account/create",
  //   title: "Create Account",
  //   component: AccountCreate,
  //   layout: DefaultLayout,
  // },
  // accountForgotPassword: {
  //   name: "account-forgot-password",
  //   path: "/account/forgot-password",
  //   title: "Forgot Password",
  //   component: ForgotPassword,
  //   layout: DefaultLayout,
  // },
  // accountResetPassword: {
  //   name: "account-reset-password",
  //   path: "/account/reset-password",
  //   title: "Reset Password",
  //   component: ResetPassword,
  //   layout: DefaultLayout,
  // },
  // accountSignIn: {
  //   name: "account-sign-in",
  //   path: "/account/sign-in",
  //   title: "Sign In",
  //   component: AccountSignIn,
  //   layout: DefaultLayout,
  // },
  dashboard: {
    name: "dashboard",
    path: "/dashboard",
    title: "Dashboard",
    component: routeComponents.Dashboard,
    layout: routeComponents.LayoutUser,
  },
  habits: {
    name: "habits",
    path: "/habits",
    title: "Habits",
    component: routeComponents.Habits,
    layout: routeComponents.LayoutUser,
  },
  homepage: {
    name: "homepage",
    path: "/",
    title: "Home",
    component: routeComponents.Homepage,
    layout: routeComponents.DefaultLayout,
  },
  notFound: {
    name: "not-found",
    path: "/not-found",
    title: "Not Found",
    component: routeComponents.NotFound,
    layout: routeComponents.DefaultLayout,
  },
  today: {
    name: "today",
    path: "/today",
    title: "Today",
    component: routeComponents.Today,
    layout: routeComponents.LayoutUser,
  },
  scorecard: {
    name: "scorecard",
    path: "/scorecard",
    title: "Scorecard",
    component: routeComponents.Scorecard,
    layout: routeComponents.LayoutUser,
  },
  settings: {
    name: "settings",
    path: "/settings",
    title: "Settings",
    component: routeComponents.Settings,
    layout: routeComponents.LayoutUser,
  },
  styleguide: {
    name: "styleguide",
    path: "/styleguide",
    title: "Styleguide",
    component: routeComponents.Styleguide,
    layout: routeComponents.DefaultLayout,
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
