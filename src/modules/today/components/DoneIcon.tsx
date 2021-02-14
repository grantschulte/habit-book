import styled from "styled-components";
import { BiCheckCircle } from "lib/Icons";
import { HabitItemIconProps } from "modules/common/HabitItem/HabitItem";

const DoneIcon = styled(BiCheckCircle).attrs<HabitItemIconProps>((props) => ({
  color: props.$isDone
    ? props.theme.color.green[400]
    : props.theme.color.grey[800],
  size: props.size ? props.size : "1.75rem",
}))<HabitItemIconProps>``;

export default DoneIcon;
