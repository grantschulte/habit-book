import React from "react";
import styled from "styled-components";
import { percentageColor } from "../utils/css.utils";

const StyledStatusBar = styled.div`
  position: relative;
  height: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -7)};
  width: 100%;
  max-width: 400px;
  overflow: hidden;
`;

const BarInner = styled.div<{ width: string }>`
  position: absolute;
  width: ${(props) => props.width || "0%"};
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.tertiary};
  transition: 200ms width ease-in-out;
`;

const StatusBar: React.FC<{ width: string }> = ({
  width,
}: {
  width: string;
}) => {
  return (
    <StyledStatusBar>
      <BarInner width={width} />
    </StyledStatusBar>
  );
};

export default StatusBar;
