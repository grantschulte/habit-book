import React from "react";
import styled from "styled-components";
import { HabitItemProps } from "../types/habit-item";
import { percentageColor } from "../utils/css.utils";

const HabitItemFlex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1.25rem;
`;

const StyledHabitItem = styled.div<{ done: boolean }>`
  display: flex;
  width: 100%;
  height: 64px;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -7)};
  border-radius: ${(props) => props.theme.borderRadii[4]};
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${(props) =>
      props.onClick
        ? percentageColor(props.theme.color.background, -15)
        : percentageColor(props.theme.color.background, -7)};
  }
`;

const HabitLabel = styled.div<{ done: boolean }>`
  margin-right: auto;
  font-size: clamp(1.25rem, 3vw, 1.25rem);
  font-weight: bold;
  color: ${(props) =>
    props.done
      ? percentageColor(props.theme.color.background, -30)
      : props.theme.color.text};
`;

const HabitItem: React.FC<HabitItemProps> = ({
  habit,
  Icon,
  onClick,
}: HabitItemProps) => {
  return (
    <StyledHabitItem done={habit.done} onClick={onClick}>
      <HabitItemFlex>
        <HabitLabel done={habit.done}>{habit.label}</HabitLabel>
        {Icon && <Icon $isDone={habit.done} />}
      </HabitItemFlex>
    </StyledHabitItem>
  );
};

export default HabitItem;
