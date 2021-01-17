import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import styled from "styled-components";
import Input from "./Input";
import { PasswordVisibilityToggleProps } from "../../types/input";

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

type PasswordInputProps = { id: string; showVisibilityToggle?: boolean };

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  showVisibilityToggle,
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
      <StyledPasswordInput type={getInputType()} id={id} />
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