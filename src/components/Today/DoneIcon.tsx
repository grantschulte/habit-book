import styled from "styled-components";
import { percentageColor } from "../../utils/css.utils";
import { BiCheckCircle } from "react-icons/bi";
import { HabitItemIconProps } from "../HabitItem";

const DoneIcon = styled(BiCheckCircle).attrs<HabitItemIconProps>((props) => ({
  color: props.isDone
    ? props.theme.color.green["500"]
    : percentageColor(props.theme.color.background, -30),
  size: props.size ?? "2rem",
}))<HabitItemIconProps>``;

export default DoneIcon;
