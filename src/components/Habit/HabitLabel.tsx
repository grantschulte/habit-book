import styled from "styled-components";
import { percentageColor } from "../../utils/css.utils";

export const HabitLabel = styled.div<{
  $isDone?: boolean;
  contentEditable?: boolean;
}>`
  margin: 0 0.5rem;
  flex-grow: 1;
  font-size: clamp(1.25rem, 3vw, 1.25rem);
  font-weight: bold;
  color: ${(props) =>
    props.$isDone
      ? percentageColor(props.theme.color.background, -30)
      : props.theme.color.text};
`;
