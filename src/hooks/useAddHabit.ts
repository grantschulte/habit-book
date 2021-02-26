import { addHabit } from "api";
import { RootState } from "app/rootReducer";
import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "dayjs";
import { resetForm } from "modules/habits/components/AddHabitForm.slice";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";

const useAddHabit = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const date = dayjs().format(REQUEST_DATE_FORMAT);
  const token = useSelector((state: RootState) => state.app.token);

  return useMutation(
    (name: string) => {
      return addHabit(
        {
          name,
          date,
        },
        token
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("habits");
        queryClient.invalidateQueries("habitEvents");
        queryClient.invalidateQueries("stats");
        queryClient.invalidateQueries("streaks");
        dispatch(resetForm());
      },
    }
  );
};

export default useAddHabit;
