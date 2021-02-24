import styled from "styled-components";

const TH = styled.th`
  padding: var(--cell-padding);
  font-size: 0.65rem;
  border: 1px solid ${(props) => props.theme.color.background};
  text-overflow: ellipsis;
  overflow: hidden;

  &:first-child {
    text-align: left;
  }
`;

export default TH;
