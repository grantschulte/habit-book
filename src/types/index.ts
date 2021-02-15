// Request

export type RequestStatus = "idle" | "fetching" | "success" | "failed";

export type RequestError = {
  error: string;
  message: string;
};

// Habit

export type Habit = {
  id: string;
  label: string;
  done: boolean;
  order?: number;
};
