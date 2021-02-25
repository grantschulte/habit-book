import React from "react";
import styled from "styled-components";

export interface IStreakItem {
  streak: number;
  habit: string;
}

interface StreakItemProps {
  item: IStreakItem;
}

const StyledStreakItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 0.75rem;
`;

const StreakHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StreakTickContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.color.backgroundAlt};
  padding: 3px;
`;
const StreakTick = styled.span`
  background-color: ${(props) => props.theme.color.success};
  height: 10px;
  width: 5px;
`;

const StreakItem: React.FC<StreakItemProps> = ({ item }) => {
  const ticks = [];

  for (let x = 0; x < item.streak; x++) {
    ticks.push(<StreakTick />);
  }

  return (
    <StyledStreakItem>
      <StreakHeading>
        <span>🔥{item.habit}</span>
        <span>{item.streak} days</span>
      </StreakHeading>
      <StreakTickContainer>{ticks}</StreakTickContainer>
    </StyledStreakItem>
  );
};

export default StreakItem;
