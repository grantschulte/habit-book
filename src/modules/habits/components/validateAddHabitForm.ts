import { AlertType } from "modules/common/Alert";
import { Habit } from "types";

const validateAddHabitForm = (input: string, habits: Habit[]) => {
  const exists = habits.find(
    (h) => h.name.toLowerCase() === input.toLowerCase()
  );

  console.log(habits);

  if (exists) {
    return {
      isValid: false,
      alert: {
        type: AlertType.Error,
        title: "Duplicate habit found",
        message: "Only one habit of the same type can be added.",
      },
    };
  }

  if (habits.length > 4) {
    return {
      isValid: false,
      alert: {
        type: AlertType.Error,
        title: "You can't have more than five habits...",
        message:
          "Research suggests you are more likely to achieve attainable goals. If you want to add another habit, delete one first.",
      },
    };
  }

  return {
    isValid: true,
    alert: null,
  };
};

export default validateAddHabitForm;
