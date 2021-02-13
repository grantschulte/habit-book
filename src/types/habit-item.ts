import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";

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
