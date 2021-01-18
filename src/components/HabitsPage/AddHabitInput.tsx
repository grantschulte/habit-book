import styled from "styled-components";
import Input from "../Form/Input";

const AddHabitInput = styled(Input).attrs({
  type: "text",
  placeholder: "Enter Habit",
})`
  width: 100%;
  max-width: 100%;
  height: 4rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1rem;
`;

export default AddHabitInput;
