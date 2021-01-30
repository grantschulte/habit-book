import styled from "styled-components";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  grid-column: 2 / 3;
  grid-row: 1 / 5;

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
  }
`;

export default MainContent;
