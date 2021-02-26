import { getStreaks } from "api";
import { RootState } from "app/rootReducer";
import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

export interface StatsStreak {
  [prop: string]: StatsStreakItem;
}

export interface StatsStreakItem {
  name: string;
  streak: number;
}

const useStreaks = () => {
  const token = useSelector((state: RootState) => state.app.token);
  const date = dayjs().subtract(1, "day");
  const begin = date.subtract(3, "month").format(REQUEST_DATE_FORMAT);
  const end = date.format(REQUEST_DATE_FORMAT);

  return useQuery(
    ["streaks", begin, end, token],
    () => {
      return getStreaks(
        {
          begin,
          end,
        },
        token
      );
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    }
  );
};

export default useStreaks;
