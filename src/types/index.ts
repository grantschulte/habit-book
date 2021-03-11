// Request

export enum RequestStatus {
  Failed = "failed",
  Fetching = "fetching",
  Idle = "idle",
  Success = "success",
}

export enum ResponseError {
  BadRequest = "Bad Request",
  Unauthorized = "Unauthorized",
  InternalServerError = "Internal Server Error",
}

export interface ResponseErrorState {
  error?: string | null;
}

export type RequestState = {
  status: RequestStatus;
} & ResponseErrorState;

export type ResponsePayload<T> = {
  data: T;
} & ResponseErrorState;

// Habit

export type Habit = {
  id: string;
  name: string;
  active: boolean;
  order?: number;
};

export interface HabitEvent {
  id: string;
  date: string;
  done: boolean;
  habit: Habit;
}

export interface HabitOrder {
  [prop: string]: number;
}
