import styled from "styled-components";

type AlertType = "success" | "error" | "warning" | "info";

const Alert = styled.div<{ type: AlertType }>`
  display: inline-block;
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

export const WarningAlert = styled(Alert).attrs({
  type: "warning",
})``;

export const SuccessAlert = styled(Alert).attrs({
  type: "success",
})``;

export const ErrorAlert = styled(Alert).attrs({
  type: "error",
})``;

export const InfoAlert = styled(Alert).attrs({
  type: "info",
})``;
