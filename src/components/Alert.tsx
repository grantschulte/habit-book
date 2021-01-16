import React from "react";
import { BiCheck, BiError, BiErrorCircle, BiInfoCircle } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import styled from "styled-components";

type AlertType = "success" | "error" | "warning" | "info";

const StyledAlert = styled.div<{ type: AlertType }>`
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  color: ${(props) => props.theme.color[props.type]};
  margin-bottom: 1rem;
  border-radius: ${(props) => props.theme.borderRadii[2]};
  padding: ${(props) => {
    return `${props.theme.spacing[2]}  ${props.theme.spacing[3]}`;
  }};

  ${({ type, theme }) => {
    if (type === "success") {
      return `
        background-color: ${theme.color.successBackground};
      `;
    } else if (type === "warning") {
      return `
        background-color: ${theme.color.warningBackground};
      `;
    } else if (type === "error") {
      return `
        background-color: ${theme.color.errorBackground};
      `;
    } else if (type === "info") {
      return `
        background-color: ${theme.color.infoBackground};
      `;
    } else {
      return `
        background-color: ${theme.color.infoBackground};
      `;
    }
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

type AlertProps = {
  Icon: IconType;
  type: AlertType;
  title: string;
  message: string;
};

export const Alert: React.FC<AlertProps> = ({
  Icon,
  type,
  title,
  message,
}: AlertProps) => {
  return (
    <StyledAlert type={type}>
      <Icon size="1.5rem" />
      <StyledAlertBody>
        <StyledAlertTitle>{title}</StyledAlertTitle>
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
  Icon: BiCheck,
})``;

export const ErrorAlert = styled(Alert).attrs({
  type: "error",
  Icon: BiErrorCircle,
})``;

export const InfoAlert = styled(Alert).attrs({
  type: "info",
  Icon: BiInfoCircle,
})``;
