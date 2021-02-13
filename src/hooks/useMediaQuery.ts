import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [mqlMatch, setMqlMatch] = useState(false);

  useEffect(() => {
    const mqstring = query;
    const mql = window.matchMedia(mqstring);

    if (mql.matches) {
      setMqlMatch(mql.matches);
    }

    function onMediaQueryChange(this: MediaQueryList, ev: MediaQueryListEvent) {
      setMqlMatch(ev.matches);
    }

    mql.addEventListener("change", onMediaQueryChange);

    return () => {
      mql.removeEventListener("change", onMediaQueryChange);
    };
  }, [query]);

  return mqlMatch;
};

export default useMediaQuery;
