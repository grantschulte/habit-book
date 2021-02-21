import { RootState } from "app/rootReducer";
import useToken from "hooks/useToken";
import { fetchHabits } from "modules/habits/Habits.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestStatus } from "types";

const useHabits = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state: RootState) => state.habits);
  const shouldFetch = useSelector(
    (state: RootState) =>
      state.habits.status === RequestStatus.Idle || state.habits.stale
  );
  const { getToken } = useToken();

  useEffect(() => {
    const initHabits = async () => {
      const token = await getToken();
      dispatch(fetchHabits(token));
    };

    if (shouldFetch) {
      initHabits();
    }
  }, [dispatch, getToken, shouldFetch]);

  return {
    ...habits,
  };
};

export default useHabits;
