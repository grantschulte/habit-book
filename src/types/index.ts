// Request

export type RequestStatus = "idle" | "fetching" | "success" | "failed";

export type RequestError = {
  error: string;
  message: string;
};

export interface RequestState {
  status: RequestStatus;
  error: Error | string | null;
}

// Habit

export type Habit = {
  id: string;
  name: string;
  done: boolean;
  active: boolean;
  order?: number;
};

export interface HabitEvent {
  id: string;
  date: string;
  done: boolean;
  habit: Habit;
}
