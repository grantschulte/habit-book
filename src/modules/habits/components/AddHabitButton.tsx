import styled from "styled-components";

const AddHabitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 2px solid;
  border-color: ${(props) => props.theme.color.green["400"]};
  padding: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.green["300"]};
  }

  span {
    margin-left: 0.5rem;
  }
`;

export default AddHabitButton;
