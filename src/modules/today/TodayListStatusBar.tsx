import React from "react";
import styled from "styled-components";

const StyledStatusBar = styled.div`
  position: relative;
  margin-bottom: 1rem;
  height: 12px;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.backgroundAlt};
`;

const BarInner = styled.div<{ width: string }>`
  position: absolute;
  width: ${(props) => props.width || "0%"};
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.success};
  transition: 200ms width ease-out;
`;

const StatusBar: React.FC<{ width: string }> = ({ width }) => {
  return (
    <StyledStatusBar data-testid="today-status-bar">
      <BarInner width={width} data-testid="today-status-bar-inner" />
    </StyledStatusBar>
  );
};

export default StatusBar;
