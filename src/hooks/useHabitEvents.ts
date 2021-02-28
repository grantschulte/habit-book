import { getHabitEvents } from "api";
import { setAppError } from "app/App.slice";
import { RootState } from "app/rootReducer";
import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "modules/common/Date";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { HabitEvent } from "types";
import { orderHabitEvents } from "utils/habit-order";

const useHabitEvents = () => {
  const token = useSelector((state: RootState) => state.app.token);
  const dispatch = useDispatch();
  const date = dayjs().format(REQUEST_DATE_FORMAT);

  return useQuery(
    ["habitEvents", date, token],
    () => {
      return getHabitEvents({ date }, token);
    },
    {
      refetchOnWindowFocus: true,
      notifyOnChangeProps: ["data", "error"],
      select: (data) => {
        const ordered: HabitEvent[] = orderHabitEvents(data);
        return ordered.filter((he) => he.habit.active);
      },
      onError: (error: Error) => {
        dispatch(setAppError({ error }));
      },
    }
  );
};

export default useHabitEvents;
