import React from "react";
import styled from "styled-components";
import { IconType } from "lib/Icons";

const StyledIcon = styled.span`
  font-size: inherit;
  line-height: 1;
`;

export type IconProps = {
  component: IconType;
  style?: React.CSSProperties;
};

const Icon = ({ component: IconComponent, style }: IconProps) => {
  return (
    <StyledIcon style={style}>
      <IconComponent style={{ fontSize: "inherit" }} />
    </StyledIcon>
  );
};

export default Icon;
