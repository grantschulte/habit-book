import styled from "styled-components";

const OverflowContainer = styled.div`
  --background-color: ${(props) => props.theme.color.background};
  overflow: scroll;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 40px;
  }

  @media screen and (max-width: 480px) {
    &:after {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        var(--background-color) 100%
      );
    }
  }
`;

export default OverflowContainer;
