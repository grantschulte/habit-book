import React from "react";
import { RequestStatus, RequestError } from "../types/request";
import { HabitHistory } from "../types/habit-score";
import { mockHabitHistory } from "../data/mockHabitHistory";

type HabitHistoryContextProps = {
  data: HabitHistory;
  message: string;
  error: RequestError | null;
  status: RequestStatus;
};

const HabitHistoryContext = React.createContext<
  HabitHistoryContextProps | undefined
>(undefined);

export const HabitHistoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const habitHistory: HabitHistoryContextProps = {
    data: mockHabitHistory,
    message: "Success",
    error: null,
    status: "success",
  };

  return (
    <HabitHistoryContext.Provider value={habitHistory}>
      {children}
    </HabitHistoryContext.Provider>
  );
};

export const useHabitHistory = () => {
  const context = React.useContext(HabitHistoryContext);
  if (context === undefined) {
    throw new Error(
      "useHabitHistory must be used within a HabitHistoryProvider"
    );
  }
  return context;
};

export default HabitHistoryContext;