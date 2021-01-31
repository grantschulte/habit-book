import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Form/Input";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledPasswordInput = styled(Input)`
  font-size: 1rem;
  letter-spacing: 1px;
`;

type PasswordInputProps = {
  id: string;
  showVisibilityToggle?: boolean;
};

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
