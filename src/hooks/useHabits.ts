import { RootState } from "app/rootReducer";
import useToken from "hooks/useToken";
import { fetchHabits } from "modules/habits/Habits.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useHabits = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state: RootState) => state.habits);
  const { getToken } = useToken();

  useEffect(() => {
    const initHabits = async () => {
      const token = await getToken();
      dispatch(fetchHabits(token));
    };

    initHabits();
  }, [dispatch, getToken]);

  return {
    ...habits,
  };
};

export default useHabits;
