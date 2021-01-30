import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 1fr) 8fr;
  grid-template-rows: 0.5fr 0.5fr 8fr 60px;
  height: 100vh;
`;

export default AppWrapper;
