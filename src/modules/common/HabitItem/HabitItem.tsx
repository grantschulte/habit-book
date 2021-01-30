import React from "react";
import styled from "styled-components";
import { HabitItemProps } from "types/habit-item";
import { percentageColor } from "utils/css.utils";

const HabitItemFlex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1.25rem;
`;

const StyledHabitItem = styled.div`
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

const HabitItem: React.FC<HabitItemProps> = ({
  isDone,
  label,
  Icon,
  IconSize = "1.5rem",
  onClick,
  innerRef,
  children,
  ...props
}: HabitItemProps) => {
  return (
    <StyledHabitItem onClick={onClick} ref={innerRef} {...props}>
      <HabitItemFlex>{children}</HabitItemFlex>
    </StyledHabitItem>
  );
};

export default HabitItem;
