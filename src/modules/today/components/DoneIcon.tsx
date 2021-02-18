import { BiCheckCircle } from "lib/Icons";
import styled from "styled-components";

export interface DoneIconProps {
  $isDone?: boolean;
  size?: string;
  $position?: "left" | "right";
}

const DoneIcon = styled(BiCheckCircle).attrs<DoneIconProps>((props) => ({
  color: props.$isDone
    ? props.theme.color.green[400]
    : props.theme.color.grey[800],
  size: props.size ? props.size : "1.75rem",
}))<DoneIconProps>`
  transition: color 200ms ease;
`;

export default DoneIcon;
