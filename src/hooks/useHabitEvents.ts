import { RootState } from "app/rootReducer";
import useToken from "hooks/useToken";
import { fetchHabitEvents } from "modules/today/Today.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestStatus } from "types";

const useHabitEvents = () => {
  const dispatch = useDispatch();
  const { getToken } = useToken();
  const today = useSelector((state: RootState) => state.today);
  const shouldFetch = useSelector(
    (state: RootState) =>
      state.today.status === RequestStatus.Idle || state.today.stale
  );
  const activeHabitEvents = useSelector((state: RootState) =>
    state.today.allHabitEvents.filter((he) => he.habit.active)
  );

  useEffect(() => {
    const init = async () => {
      const token = await getToken();
      dispatch(fetchHabitEvents(token));
    };

    if (shouldFetch) {
      init();
    }
  }, [dispatch, getToken, shouldFetch]);

  return { ...today, activeHabitEvents };
};

export default useHabitEvents;
