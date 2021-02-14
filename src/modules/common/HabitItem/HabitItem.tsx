import React from "react";
import styled from "styled-components";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "lib/DragNDrop";

export type HabitItemProps = {
  done?: boolean;
  label: string;
  onClick?: (e: React.SyntheticEvent) => void;
  innerRef?: (element?: HTMLElement | null | undefined) => any;
  children: React.ReactNode;
} & Partial<DraggableProvidedDraggableProps> &
  Partial<DraggableProvidedDragHandleProps>;

export type HabitItemIconProps = {
  $isDone?: boolean;
  size?: string;
  $position?: "left" | "right";
};

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
    props.done ? props.theme.color.success : props.theme.color.text};
  border: 2px solid;
  border-color: ${(props) =>
    props.done ? props.theme.color.success : props.theme.color.border};

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
