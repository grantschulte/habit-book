import React, { CSSProperties } from "react";
import { BiCheckCircle, BiError, BiErrorCircle, BiInfoCircle } from "lib/Icons";
import styled from "styled-components";

export enum AlertType {
  Error = "error",
  Success = "success",
  Warning = "warning",
  Info = "info",
}

export interface AlertProps {
  type: AlertType;
  title?: string;
  message: string;
  style?: CSSProperties;
}

const ICON_MAP = {
  error: BiErrorCircle,
  info: BiInfoCircle,
  success: BiCheckCircle,
  warning: BiError,
};

export const AlertContainer = styled.div<{ type: AlertType }>`
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.color[props.type]};
  margin-bottom: 1rem;
  border: 2px solid;
  border-color: ${(props) => props.theme.color[props.type]};
  border-radius: ${(props) => props.theme.borderRadii[4]};
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
  type,
  title,
  message,
  style,
}: AlertProps) => {
  const Icon = ICON_MAP[type];

  return (
    <AlertContainer type={type} style={style}>
      <Icon size="1.5rem" style={{ flexShrink: 0 }} />
      <StyledAlertBody>
        {title ? <StyledAlertTitle>{title}</StyledAlertTitle> : null}
        <StyledAlertMessage>{message}</StyledAlertMessage>
      </StyledAlertBody>
    </AlertContainer>
  );
};

export const WarningAlert = styled(Alert).attrs({
  type: AlertType.Warning,
  Icon: BiError,
})``;

export const SuccessAlert = styled(Alert).attrs({
  type: AlertType.Success,
  Icon: BiCheckCircle,
})``;

export const ErrorAlert = styled(Alert).attrs({
  type: AlertType.Error,
  Icon: BiErrorCircle,
})``;

export const InfoAlert = styled(Alert).attrs({
  type: AlertType.Info,
  Icon: BiInfoCircle,
})``;
