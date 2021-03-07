import styled from "styled-components";
import { percentageColor } from "utils/css";

interface SkeletonProps {
  color?: string;
  size?: string;
}

const sizes = {
  xs: "1rem",
  sm: "2rem",
  md: "3rem",
  lg: "4rem",
  xl: "5rem",
  xxl: "6rem",
};

const Skeleton = styled.div.attrs({
  "data-testid": "skeleton",
})<SkeletonProps>`
  position: relative;
  overflow: hidden;
  background-color: ${(props) =>
    props.color ?? props.theme.color.backgroundAlt};
  height: ${(props) =>
    props.size ? sizes[props.size as keyof typeof sizes] : "2rem"};

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${(props) =>
          props.color
            ? percentageColor(props.color, 10)
            : percentageColor(props.theme.color.backgroundAlt, 10)}
        50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

export default Skeleton;
