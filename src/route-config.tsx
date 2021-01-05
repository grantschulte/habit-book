type Route = {
  name: string;
  path: string;
  isExternal?: boolean;
};

type RouteConfig = {
  [route: string]: Route;
};

const routes: RouteConfig = {
  habits: {
    name: "habits",
    path: "/habits",
  },
  home: {
    name: "home",
    path: "/",
  },
  scoreboard: {
    name: "scoreboard",
    path: "/scoreboard",
  },
  settings: {
    name: "settings",
    path: "/settings",
  },
};

export default routes;
