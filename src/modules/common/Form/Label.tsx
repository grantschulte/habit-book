import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
`;

const LabelText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

type LabelProps = {
  children?: React.ReactNode;
  htmlFor?: string;
  value: string;
  style?: React.CSSProperties;
};

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor = "",
  value,
  style = {},
}: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} style={style}>
      <LabelText>{value}</LabelText>
      {children}
    </StyledLabel>
  );
};

export default Label;
