import { useState } from "react";
import tableData from "data/week-table.json";

const useHabitHistory = () => {
  const [data] = useState(tableData);
  return data;
};

export default useHabitHistory;
