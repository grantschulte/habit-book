import { useLocation } from "Router";
import { PageTitleMappings } from "config/routes";

export default function usePageTitle() {
  const location = useLocation();
  return PageTitleMappings[location.pathname] || "";
}
