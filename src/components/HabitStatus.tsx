import React from "react";
import styled, { ThemeContext } from "styled-components";
import { percentageColor } from "../utils/css.utils";
import { BiCheckCircle } from "react-icons/bi";

const StyledHabitStatus = styled.div`
  line-height: 0;
`;

const HabitStatus: React.FC<{ done: boolean; size?: string }> = ({
  done,
  size = "clamp(1.75rem, 4vh, 2.5rem)",
}: {
  done: boolean;
  size?: string;
}) => {
  const theme = React.useContext(ThemeContext);
  const color = done
    ? theme.color.success
    : percentageColor(theme.color.background, -30);

  return (
    <StyledHabitStatus>
      <BiCheckCircle size={size} color={color} />
    </StyledHabitStatus>
  );
};

export default HabitStatus;
