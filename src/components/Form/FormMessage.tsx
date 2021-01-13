import styled from "styled-components";
import { percentageColor } from "../../utils/css.utils";

type MessageType = "success" | "error" | "warning" | "info";

const FormMessage = styled.div<{ type: MessageType }>`
  font-size: 1rem;
  color: ${(props) => percentageColor(props.theme.color[props.type], -10)};
  /* padding: 0.5rem; */
  margin-bottom: 1rem;
  border-radius: 0.25rem;
`;

export const WarningMessage = styled(FormMessage).attrs({
  type: "warning",
})``;

export const SuccessMessage = styled(FormMessage).attrs({
  type: "success",
})``;

export const ErrorMessage = styled(FormMessage).attrs({
  type: "error",
})``;

export const InfoMessage = styled(FormMessage).attrs({
  type: "info",
})``;
