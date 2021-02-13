import React from "react";
import styled from "styled-components";
import { border } from "styles/mixins";
import { HabitItemProps } from "types/habit-item";

const HabitItemFlex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

const StyledHabitItem = styled.div<{ done: boolean | undefined }>`
  display: flex;
  width: 100%;
  height: 64px;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) =>
    props.done ? props.theme.color.green[400] : props.theme.color.text};
  cursor: pointer;

  ${border};

  border-color: ${(props) =>
    props.done ? props.theme.color.green[400] : props.theme.color.black};

  &:last-child {
    margin-bottom: 0;
  }
`;

const HabitItem: React.FC<HabitItemProps> = ({
  done,
  label,
  onClick,
  innerRef,
  children,
  ...props
}: HabitItemProps) => {
  return (
    <StyledHabitItem onClick={onClick} ref={innerRef} done={done} {...props}>
      <HabitItemFlex>{children}</HabitItemFlex>
    </StyledHabitItem>
  );
};

export default HabitItem;
