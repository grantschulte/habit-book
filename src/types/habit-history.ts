export interface HistoryDay {
  id: string;
  date: string;
  name: string;
  habits: HabitEvent[];
}

export interface HabitEvent {
  id: string;
  date: string;
  name: string;
  done: boolean;
}

export interface HabitTable {
  from: string;
  to: string;
  habits: Array<string>;
  events: HistoryDay[];
}

export interface HistoryTableProps {
  data: HabitTable;
}
