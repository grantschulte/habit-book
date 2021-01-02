type Route = {
  name: string;
  path: string;
  isExternal?: boolean;
};

type RouteConfig = {
  [route: string]: Route;
};

const routes: RouteConfig = {
  home: {
    name: "home",
    path: "/",
  },
  scores: {
    name: "scores",
    path: "/scores",
  },
  settings: {
    name: "settings",
    path: "/settings",
  },
};

export default routes;
