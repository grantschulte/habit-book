import React from "react";
import styled from "styled-components";

export interface IStreakItem {
  level: number;
  habit: string;
}

interface StreakItemProps {
  item: IStreakItem;
}

const streakLevelIcon = ["🔥", "🔥🔥", "🔥🔥🔥", "🔥🔥🔥🔥", "🔥🔥🔥🔥🔥"];

const streakLevelMessage = [
  "2 days+",
  "1 week+",
  "2 weeks+",
  "1 month+",
  "2 months+",
];

const StyledStreakItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;

  span {
    flex-shrink: 0;
    line-height: 1.2rem;
  }
`;

const StreakItem: React.FC<StreakItemProps> = ({ item }) => {
  const message = `${item.habit} (${streakLevelMessage[item.level - 1]})`;

  return (
    <StyledStreakItem>
      <span>{streakLevelIcon[item.level - 1]}</span>
      <span>{message}</span>
    </StyledStreakItem>
  );
};

export default StreakItem;
