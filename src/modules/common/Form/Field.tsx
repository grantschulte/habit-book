import React from "react";
import styled from "styled-components";

type FieldProps = { children: React.ReactNode };

const StyledField = styled.div`
  display: flex;
  width: 100%;
`;

const Field: React.FC<FieldProps> = ({ children }: FieldProps) => {
  return <StyledField>{children}</StyledField>;
};

export default Field;
