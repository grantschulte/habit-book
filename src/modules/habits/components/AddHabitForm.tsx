import { RootState } from "app/rootReducer";
import Button from "modules/common/Button";
import Input from "modules/common/Input";
import InputCombo from "modules/common/InputCombo";
import {
  updateInput,
  validateForm,
} from "modules/habits/components/AddHabitForm.slice";
import React, { ChangeEvent } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const AddHabitForm = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state: RootState) => state.addHabit);

  const handleAddHabit = () => {
    if (!input) {
      return;
    }
    dispatch(validateForm(input));
  };

  const handleAddHabitInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInput({ name: e.target.value }));
  };

  const handleAddHabitKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddHabit();
    }
  };

  return (
    <InputCombo style={{ marginBottom: "0.5rem" }} size="lg">
      <Input
        onKeyUp={handleAddHabitKeyUp}
        onInput={handleAddHabitInput}
        value={input}
        placeholder="Add Habit"
      />
      <Button buttonType="primary" onClick={handleAddHabit}>
        <BiPlus size="1.75rem" />
      </Button>
    </InputCombo>
  );
};

export default AddHabitForm;
