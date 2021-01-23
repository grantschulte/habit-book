import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";

export type HabitItemProps = {
  isDone?: boolean;
  label: string;
  Icon?: React.ComponentType<HabitItemIconProps>;
  IconSize?: string;
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
