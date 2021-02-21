import Skeleton from "modules/common/Skeleton";
import React from "react";
import styled from "styled-components";

const StyledSkeleton = styled(Skeleton).attrs({
  size: "lg",
})`
  margin-bottom: 0.5rem;
`;

const TodaySkeleton = () => {
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

export default TodaySkeleton;
