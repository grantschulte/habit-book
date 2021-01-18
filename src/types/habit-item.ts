import Habit from "./habit";

export type HabitItemProps = {
  habit: Habit;
  Icon?: React.ComponentType<HabitItemIconProps>;
  onClick?: (e: React.SyntheticEvent) => void;
};

export type HabitItemIconProps = {
  $isDone?: boolean;
  size?: string;
};
