import styled from "styled-components";

const Score = styled.div.attrs<{ score: string }>((props) => ({
  content: props.score,
}))<{ score: string }>`
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.color.secondary};
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.backgroundAlt};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${(props) => props.score};
    background-color: ${(props) => props.theme.color.success};
  }

  &::before {
    content: attr(content);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    color: ${(props) => props.theme.color.text};
    z-index: 2;
  }
`;

export default Score;
