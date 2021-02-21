import Skeleton from "modules/common/Skeleton";
import React from "react";
import styled from "styled-components";

const StyledSkeleton = styled(Skeleton).attrs((props) => ({
  size: "lg",
}))`
  margin-bottom: 0.5rem;
`;

const HabitListDraggableSkeleton = () => {
  return (
    <>
      <StyledSkeleton />
      <StyledSkeleton />
      <StyledSkeleton />
      <StyledSkeleton />
      <StyledSkeleton />
    </>
  );
};

export default HabitListDraggableSkeleton;
