import { updateHabit } from "api";
import { setAppError } from "app/App.slice";
import { RootState } from "app/rootReducer";
import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "dayjs";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";

interface EditHabitMutationParams {
  name?: string;
  active?: boolean;
  id: string;
}

const useEditHabit = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.app.token);
  const queryClient = useQueryClient();
  const date = dayjs().format(REQUEST_DATE_FORMAT);

  return useMutation(
    ({ name, active, id }: EditHabitMutationParams) => {
      return updateHabit(
        {
          name,
          active,
          date,
        },
        id,
        token
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("habits");
        queryClient.invalidateQueries("habitEvents");
        queryClient.invalidateQueries("stats");
        queryClient.invalidateQueries("streaks");
      },
      onError: (error: Error) => {
        dispatch(setAppError({ error }));
      },
    }
  );
};

export default useEditHabit;
