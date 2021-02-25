import useStreaks, { StatsStreakItem } from "hooks/useStreaks";
import StreakItem from "modules/dashboard/components/Streaks/StreakItem";
import StreaksEmptyState from "modules/dashboard/components/Streaks/StreaksEmpty";
import StreaksSkeleton from "modules/dashboard/components/Streaks/StreaksSkeleton";
import React from "react";
import styled from "styled-components";

const StreaksContainer = styled.div`
  max-height: 300px;
`;

const Streaks = () => {
  const { data, isLoading, isSuccess } = useStreaks();

  if (isLoading || !data.length) {
    return <StreaksSkeleton />;
  }

  if (isSuccess && data.length === 0) {
    return <StreaksEmptyState />;
  }

  return (
    <StreaksContainer>
      {data.map((item: StatsStreakItem) => (
        <StreakItem item={item} key={`${item.name}-${item.streak}`} />
      ))}
    </StreaksContainer>
  );
};

export default Streaks;
