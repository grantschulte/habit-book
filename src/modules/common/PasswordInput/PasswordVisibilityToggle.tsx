import React from "react";
import styled from "styled-components";
import { BiHide, BiShow } from "lib/Icons";

export type PasswordVisibilityToggleProps = {
  onClick: () => void;
  passwordVisible: boolean;
};

const StyledPasswordVisibilityToggle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  height: 100%;
  right: -2rem;
`;

const Icon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
`;

const PasswordVisibilityToggle: React.FC<PasswordVisibilityToggleProps> = ({
  onClick,
  passwordVisible,
}: PasswordVisibilityToggleProps) => {
  return (
    <StyledPasswordVisibilityToggle>
      <Icon onClick={onClick}>{passwordVisible ? <BiHide /> : <BiShow />}</Icon>
    </StyledPasswordVisibilityToggle>
  );
};

export default PasswordVisibilityToggle;
