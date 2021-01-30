import styled from "styled-components";
import { BiCheckCircle } from "modules/common/Icons";
import { percentageColor } from "utils/css.utils";
import { HabitItemIconProps } from "types/habit-item";

const DoneIcon = styled(BiCheckCircle).attrs<HabitItemIconProps>((props) => ({
  color: props.$isDone
    ? props.theme.color.green["500"]
    : percentageColor(props.theme.color.background, -30),
  size: "1.75rem",
}))<HabitItemIconProps>``;

export default DoneIcon;
