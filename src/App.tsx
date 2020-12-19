import React from "react";
import styled from "styled-components";

import { DateProvider } from "./context/date-context";
import Header from "./components/Header";
import TodayView from "./components/TodayView";
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
      <DateProvider>
        <Header></Header>
        <MainContent>
          <TodayView></TodayView>
        </MainContent>
      </DateProvider>
    </AppWrapper>
  );
}

export default App;
