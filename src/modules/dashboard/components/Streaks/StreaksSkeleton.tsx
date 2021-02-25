import Skeleton from "modules/common/Skeleton";
import React from "react";

const StreaksSkeleton = () => {
  return (
    <>
      <Skeleton size="xs" style={{ marginBottom: "0.5rem" }} />
      <Skeleton size="xs" style={{ marginBottom: "0.5rem" }} />
      <Skeleton size="xs" style={{ marginBottom: "0.5rem" }} />
      <Skeleton size="xs" style={{ marginBottom: "0.5rem" }} />
      <Skeleton size="xs" style={{ marginBottom: "0.5rem" }} />
    </>
  );
};

export default StreaksSkeleton;
