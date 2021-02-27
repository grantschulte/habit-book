import { AlertType } from "modules/common/Alert";
import { Habit } from "types";
import content from "config/content.json";

const validateAddHabitForm = (input: string, habits: Habit[]) => {
  const exists = habits.find(
    (h) => h.name.toLowerCase() === input.toLowerCase()
  );

  if (exists) {
    return {
      isValid: false,
      alert: {
        type: AlertType.Error,
        title: content.duplicateHabitFound,
        message: content.duplicateHabitFoundMessage,
      },
    };
  }

  if (habits.length > 4) {
    return {
      isValid: false,
      alert: {
        type: AlertType.Error,
        title: content.habitMaxReached,
        message: content.habitMaxReachedMessage,
      },
    };
  }

  return {
    isValid: true,
    alert: null,
  };
};

export default validateAddHabitForm;
