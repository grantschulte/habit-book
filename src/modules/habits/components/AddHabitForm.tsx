import useAddHabit from "hooks/useAddHabit";
import { Alert } from "modules/common/Alert";
import Button from "modules/common/Button";
import Input from "modules/common/Input";
import InputCombo from "modules/common/InputCombo";
import { updateInput } from "modules/habits/components/AddHabitForm.slice";
import React, { ChangeEvent } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const AlertContainer = styled.div`
  margin-top: 1rem;
`;

const AddHabitForm = () => {
  const dispatch = useDispatch();
  const { input, message, validateForm } = useAddHabit();

  const handleAddHabit = () => {
    if (!input) {
      return;
    }
    validateForm(input);
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
          placeholder="Add Habit"
        />
        <Button buttonType="primary" onClick={handleAddHabit}>
          <BiPlus size="1.75rem" />
        </Button>
      </InputCombo>

      {message && (
        <AlertContainer>
          <Alert
            type={message.type}
            message={message.message}
            title={message.title}
          />
        </AlertContainer>
      )}
    </>
  );
};

export default AddHabitForm;
