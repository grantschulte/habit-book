import React from "react";
import styled from "styled-components";
import DoneIcon from "modules/today/components/DoneIcon";
import { HabitEvent } from "../HistoryTable/HistoryTable";

const StyledCellData = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CellItem = styled.div`
  font-size: 0.75rem;
`;

const CellData = ({ name, done }: HabitEvent) => (
  <StyledCellData>
    <CellItem>{name}</CellItem>
    <CellItem>
      <DoneIcon $isDone={done} size="1rem" />
    </CellItem>
  </StyledCellData>
);

export default CellData;
