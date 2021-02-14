import { useEffect, useState } from "react";
import { CalendarDatum } from "lib/Calendar";
import mockCalendarData from "data/calendar.json";

const initState = {
  from: "2021-01-02",
  to: "2021-12-31",
};

type Direction = "vertical" | "horizontal";

const useCalendar = (mqlMatch: boolean) => {
  const [cal] = useState(initState);
  const [data] = useState<CalendarDatum[]>(mockCalendarData);
  const [direction, setDirection] = useState<Direction>("horizontal");

  useEffect(() => {
    const dir = mqlMatch ? "vertical" : "horizontal";
    setDirection(dir);
  }, [mqlMatch]);

  return { cal, data, direction };
};

export default useCalendar;
