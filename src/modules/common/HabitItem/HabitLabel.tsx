import styled from "styled-components";

export const HabitLabel = styled.div<{
  $isDone?: boolean;
  contentEditable?: boolean;
}>`
  flex-grow: 1;
  font-weight: bold;
  font-size: 1rem;
`;
