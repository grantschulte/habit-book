import React from "react";
import { BiCheckCircle, BiError, BiErrorCircle, BiInfoCircle } from "lib/Icons";
import { IconType } from "react-icons/lib";
import styled from "styled-components";

export type AlertType = "success" | "error" | "warning" | "info";

export type AlertProps = {
  Icon: IconType;
  type: AlertType;
  title?: string;
  message: string;
};

const StyledAlert = styled.div<{ type: AlertType }>`
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  color: ${(props) => props.theme.color[props.type]};
  margin-bottom: 1rem;
  border: 2px solid;
  border-color: ${(props) => props.theme.color[props.type]};
  padding: ${(props) => {
    return `${props.theme.spacing[3]}  ${props.theme.spacing[3]}`;
  }};
`;

const StyledAlertTitle = styled.div`
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: inherit;
`;

const StyledAlertMessage = styled.div`
  color: inherit;
`;

const StyledAlertBody = styled.div`
  margin-left: 0.5rem;
`;

export const Alert: React.FC<AlertProps> = ({
  Icon,
  type,
  title,
  message,
}: AlertProps) => {
  return (
    <StyledAlert type={type}>
      <Icon size="1.5rem" style={{ flexShrink: 0 }} />
      <StyledAlertBody>
        {title ? <StyledAlertTitle>{title}</StyledAlertTitle> : null}
        <StyledAlertMessage>{message}</StyledAlertMessage>
      </StyledAlertBody>
    </StyledAlert>
  );
};

export const WarningAlert = styled(Alert).attrs({
  type: "warning",
  Icon: BiError,
})``;

export const SuccessAlert = styled(Alert).attrs({
  type: "success",
  Icon: BiCheckCircle,
})``;

export const ErrorAlert = styled(Alert).attrs({
  type: "error",
  Icon: BiErrorCircle,
})``;

export const InfoAlert = styled(Alert).attrs({
  type: "info",
  Icon: BiInfoCircle,
})``;
