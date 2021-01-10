type Route = {
  name: string;
  path: string;
  isExternal?: boolean;
  title: string;
};

type RouteConfig = {
  [route: string]: Route;
};

const routes: RouteConfig = {
  dashboard: {
    name: "dashboard",
    path: "/",
    title: "Dashboard",
  },
  habits: {
    name: "habits",
    path: "/habits",
    title: "Habits",
  },
  today: {
    name: "today",
    path: "/today",
    title: "Today",
  },
  scorecard: {
    name: "scorecard",
    path: "/scorecard",
    title: "Scorecard",
  },
  settings: {
    name: "settings",
    path: "/settings",
    title: "Settings",
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
