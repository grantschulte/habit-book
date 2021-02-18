import { useAuth0 } from "@auth0/auth0-react";
import { setUserToken } from "app/App.slice";
import { RootState } from "app/rootReducer";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
} from "lib/DragNDrop";
import { Alert } from "modules/common/Alert";
import AddHabitForm from "modules/habits/components/AddHabitForm";
import { fetchHabits, reorderHabits } from "modules/habits/Habits.slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Habit } from "types";
import DraggableItem from "./DraggableItem/DraggableItem";

const HabitListContainer = styled.div`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const EmptyStateContainer = styled.div`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  padding: 1.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const AlertContainer = styled.div`
  margin-top: 1rem;
`;

const HabitListDraggable: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.app.token);
  const { getAccessTokenSilently } = useAuth0();
  const { message } = useSelector((state: RootState) => state.addHabit);
  const { allHabits } = useSelector((state: RootState) => state.habits);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch, token]);

  useEffect(() => {
    const setToken = async () => {
      const token = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        scope: process.env.REACT_APP_AUTH0_SCOPE,
      });
      dispatch(setUserToken({ token }));
    };
    setToken();
  }, [dispatch, getAccessTokenSilently]);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const h: Habit = allHabits[source.index];

    dispatch(
      reorderHabits({
        source: source.index,
        destination: destination.index,
        habit: h,
      })
    );
  };

  if (!allHabits.length) {
    return (
      <>
        <AddHabitForm />
        <EmptyStateContainer>Add a habit, and get to work.</EmptyStateContainer>
      </>
    );
  }

  return (
    <>
      <AddHabitForm />

      {message && (
        <AlertContainer>
          <Alert
            type={message.type}
            message={message.message}
            title={message.title}
          />
        </AlertContainer>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="habit-list-droppable">
          {(provided: DroppableProvided) => (
            <HabitListContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div>
                {allHabits.map((habit, index) => {
                  return (
                    <DraggableItem habit={habit} index={index} key={habit.id} />
                  );
                })}
              </div>
              {provided.placeholder}
            </HabitListContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default HabitListDraggable;
