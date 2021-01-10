import { useLocation } from "react-router-dom";
import { PageTitleMappings } from "../route-config";

export default function usePageTitle() {
  const location = useLocation();
  return PageTitleMappings[location.pathname] || "";
}
