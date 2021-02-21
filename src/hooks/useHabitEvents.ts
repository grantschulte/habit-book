import { RootState } from "app/rootReducer";
import useToken from "hooks/useToken";
import { fetchHabitEvents } from "modules/today/Today.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useHabitEvents = () => {
  const dispatch = useDispatch();
  const { getToken } = useToken();
  const habitEvents = useSelector((state: RootState) => state.today);

  useEffect(() => {
    const init = async () => {
      const token = await getToken();
      dispatch(fetchHabitEvents(token));
    };

    init();
  }, [dispatch, getToken]);

  return { ...habitEvents };
};

export default useHabitEvents;
