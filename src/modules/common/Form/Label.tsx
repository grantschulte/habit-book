import React, { ReactChild } from "react";
import styled from "styled-components";

const StyledLabel = styled.label<{ htmlFor: string }>``;

const LabelText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Label: React.FC<{
  children: ReactChild;
  for: string;
  value: string;
}> = (props: { children: ReactChild; for: string; value: string }) => {
  return (
    <StyledLabel htmlFor={props.for}>
      <LabelText>{props.value}</LabelText>
      {props.children}
    </StyledLabel>
  );
};

export default Label;
