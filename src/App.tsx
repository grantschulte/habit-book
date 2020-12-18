import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import HabitDashboard from "./components/HabitDashboard";
import "./App.css";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

function App() {
  return (
    <AppWrapper>
      <Header height="50px"></Header>
      <MainContent>
        <HabitDashboard></HabitDashboard>
      </MainContent>
    </AppWrapper>
  );
}

export default App;
