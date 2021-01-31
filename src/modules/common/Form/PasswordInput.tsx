import React, { useState } from "react";
import styled from "styled-components";
import { PasswordVisibilityToggleProps } from "types/input";
import { BiHide, BiShow } from "modules/common/Icons";
import Input from "./Input";

export const StyledPasswordInput = styled(Input)`
  font-size: 1rem;
  letter-spacing: 1px;
  margin-right: 0.5rem;
`;

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PasswordVisibilityToggle: React.FC<PasswordVisibilityToggleProps> = ({
  onClick,
  passwordVisible,
}: PasswordVisibilityToggleProps) => {
  const Icon = passwordVisible ? BiHide : BiShow;
  return (
    <Icon onClick={onClick} size="1.5rem" style={{ cursor: "pointer" }}>
      Toggle
    </Icon>
  );
};

type PasswordInputProps = {
  id: string;
  showVisibilityToggle?: boolean;
  noMax?: boolean;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  showVisibilityToggle,
  noMax,
}: PasswordInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const toggleInputType = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getInputType = () => {
    return passwordVisible ? "text" : "password";
  };

  return (
    <PasswordInputContainer>
      <StyledPasswordInput type={getInputType()} id={id} noMax={noMax} />
      {showVisibilityToggle && (
        <PasswordVisibilityToggle
          onClick={toggleInputType}
          passwordVisible={passwordVisible}
        />
      )}
    </PasswordInputContainer>
  );
};

export default PasswordInput;
