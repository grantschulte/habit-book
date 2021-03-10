import { RootState } from "app/rootReducer";
import content from "config/content.json";
import useAddHabit from "hooks/useAddHabit";
import { Alert } from "modules/common/Alert";
import Button from "modules/common/Button";
import Input from "modules/common/Input";
import InputCombo from "modules/common/InputCombo";
import {
  setAlert,
  updateInput,
} from "modules/habits/components/AddHabitForm.slice";
import validateAddHabitForm from "modules/habits/components/validateAddHabitForm";
import React, { ChangeEvent } from "react";
import { BiPlus } from "react-icons/bi";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Habit } from "types";

const AlertContainer = styled.div`
  margin-top: 1rem;
`;

const AddHabitForm = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { input, alert } = useSelector(
    (state: RootState) => state.addHabitForm
  );
  const token = useSelector((state: RootState) => state.app.token);
  const habits: Habit[] = queryClient.getQueryData(["habits", token]) || [];
  const { mutate } = useAddHabit();

  const handleAddHabit = () => {
    if (!input) {
      return;
    }
    const { isValid, alert } = validateAddHabitForm(input, habits);

    if (!isValid && alert) {
      return dispatch(setAlert({ alert }));
    }

    mutate(input);
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
    <>
      <InputCombo style={{ marginBottom: "0.5rem" }} size="lg">
        <Input
          onKeyUp={handleAddHabitKeyUp}
          onInput={handleAddHabitInput}
          value={input}
          placeholder={content.addHabit}
        />
        <Button onClick={handleAddHabit}>
          <BiPlus size="1.75rem" />
        </Button>
      </InputCombo>

      {alert && (
        <AlertContainer>
          <Alert
            type={alert.type}
            message={alert.message}
            title={alert.title}
          />
        </AlertContainer>
      )}
    </>
  );
};

export default AddHabitForm;
