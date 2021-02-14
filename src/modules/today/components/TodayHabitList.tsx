import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HabitItem from "modules/common/HabitItem/HabitItem";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
import { toggleHabit } from "state/habits/habit.actions";
import DoneIcon from "./DoneIcon";
import { useHabits } from "context/HabitContext";
import { InfoAlert } from "modules/common/Alert";
import StatusBar from "modules/common/StatusBar";

const StyledHabitList = styled.div`
  width: 100%;
`;

const HabitList: React.FC = () => {
  const { state, dispatch } = useHabits();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const allDone = state.habits.every((h) => h.done);
    setAlert(allDone);
  }, [state.habits]);

  return (
    <>
      <StatusBar />
      {alert && (
        <InfoAlert
          message="Congratulations. You've completed all of your habits today."
          title="All done!"
        />
      )}
      <StyledHabitList>
        {state.habits.map((h) => {
          return (
            <HabitItem
              done={h.done}
              label={h.label}
              key={h.id.toString()}
              onClick={() => {
                dispatch(toggleHabit(h));
              }}
            >
              <HabitLabel $isDone={h.done}>{h.label}</HabitLabel>
              <DoneIcon $isDone={h.done} size="1.5rem" />
            </HabitItem>
          );
        })}
      </StyledHabitList>
    </>
  );
};

export default HabitList;
