import { getHabits } from "api";
import { setAppError } from "app/App.slice";
import { RootState } from "app/rootReducer";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { orderHabits } from "utils/habit-order";

const useHabits = () => {
  const token = useSelector((state: RootState) => state.app.token);
  const dispatch = useDispatch();

  return useQuery(
    ["habits", token],
    () => {
      return getHabits(token);
    },
    {
      refetchOnWindowFocus: false,
      notifyOnChangeProps: ["data", "error"],
      staleTime: 1000 * 60 * 60 * 24,
      select: (data) => {
        return orderHabits(data);
      },
      onError: (error: Error) => {
        dispatch(setAppError({ error: error.message }));
      },
    }
  );
};

export default useHabits;
