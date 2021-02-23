import { updateHabitEvent } from "api";
import { RootState } from "app/rootReducer";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";

const useHabitEventUpdate = () => {
  const token = useSelector((state: RootState) => state.app.token);
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => {
      return updateHabitEvent({ id }, token);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("habitEvents");
        queryClient.invalidateQueries("reportCard");
      },
    }
  );
};

export default useHabitEventUpdate;
