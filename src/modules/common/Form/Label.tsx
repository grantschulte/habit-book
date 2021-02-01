import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label<{ htmlFor: string }>``;

const LabelText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
  value: string;
};

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  value,
}: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      <LabelText>{value}</LabelText>
      {children}
    </StyledLabel>
  );
};

export default Label;
