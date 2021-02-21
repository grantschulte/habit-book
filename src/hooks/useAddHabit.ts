import { RootState } from "app/rootReducer";
import useToken from "hooks/useToken";
import { AlertType } from "modules/common/Alert";
import {
  resetForm,
  setAlert,
} from "modules/habits/components/AddHabitForm.slice";
import { fetchAddHabit } from "modules/habits/Habits.slice";
import { useDispatch, useSelector } from "react-redux";

const useAddHabit = () => {
  const dispatch = useDispatch();
  const { getToken } = useToken();
  const { allHabits } = useSelector((state: RootState) => state.habits);
  const { input, message } = useSelector((state: RootState) => state.addHabit);

  const addHabit = async () => {
    const token = await getToken();
    dispatch(fetchAddHabit(input, token));
    dispatch(resetForm());
  };

  const validateForm = (input: string) => {
    const exists = allHabits.find(
      (habit) => habit.name.toLowerCase() === input.toLowerCase()
    );

    if (exists) {
      dispatch(
        setAlert({
          type: AlertType.Error,
          title: "Duplicate habit found",
          message: "Only one habit of the same type can be added.",
        })
      );
      return;
    }

    if (allHabits.length > 4) {
      dispatch(
        setAlert({
          type: AlertType.Error,
          title: "You can't have more than five habits...",
          message:
            "Research suggests you are more likely to achieve attainable goals. If you want to add another habit, delete one first.",
        })
      );
      return;
    }

    addHabit();
  };

  return { input, message, validateForm };
};

export default useAddHabit;
