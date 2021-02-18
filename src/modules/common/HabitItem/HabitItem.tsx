import React from "react";
import styled from "styled-components";

type HabitItemProps = {
  done?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
};

const HabitItemInner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

const HabitItemContainer = styled.div<{ done: boolean | undefined }>`
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
  transition: border-color 200ms ease, color 200ms ease;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HabitItem: React.FC<HabitItemProps> = ({
  done,
  onClick,
  children,
}: HabitItemProps) => {
  return (
    <HabitItemContainer onClick={onClick} done={done}>
      <HabitItemInner>{children}</HabitItemInner>
    </HabitItemContainer>
  );
};

export default HabitItem;
