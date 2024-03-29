import { withAuthenticationRequired } from "@auth0/auth0-react";
import LayoutUser from "modules/common/Layout/LayoutUser";
import DefaultLayout from "modules/common/Layout";
import Dashboard from "modules/dashboard";
import Habits from "modules/habits";
import Homepage from "modules/homepage";
import NotFound from "modules/NotFound";
import Settings from "modules/settings/Settings";
import Styleguide from "modules/styleguide";
import Today from "modules/today";
import Download from "modules/download/Download";

const routeComponents = {
  LayoutUser: withAuthenticationRequired(LayoutUser),
  DefaultLayout,
  Dashboard,
  Download,
  Habits,
  Homepage,
  NotFound,
  Settings,
  Styleguide,
  Today,
};

export default routeComponents;
