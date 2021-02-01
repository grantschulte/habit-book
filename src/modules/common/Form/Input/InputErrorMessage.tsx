import styled from "styled-components";

const InputErrorMessage = styled.p`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.color.error};
  font-size: 0.8rem;
`;

export default InputErrorMessage;
