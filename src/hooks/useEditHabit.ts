import useToken from "hooks/useToken";
import {
  fetchEditHabit,
  FetchEditHabitParams,
} from "modules/habits/Habits.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const useEditHabit = () => {
  const dispatch = useDispatch();
  const { getToken } = useToken();

  const editHabit = useCallback(
    async (id: string, params: FetchEditHabitParams) => {
      const token = await getToken();
      dispatch(fetchEditHabit(id, params, token));
    },
    [dispatch, getToken]
  );

  return editHabit;
};

export default useEditHabit;
