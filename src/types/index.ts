// Request

export type RequestStatus = "idle" | "fetching" | "success" | "failed";

export interface ResponseErrorState {
  error?: string | null;
}

export type RequestState = {
  status: RequestStatus;
} & ResponseErrorState;

export type ResponsePayload<T> = {
  data: T;
} & ResponseErrorState;

export enum ResponseError {
  BadRequest = "Bad Request",
  Unauthorized = "Unauthorized",
  InternalServerError = "Internal Server Error",
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

export interface HabitOrder {
  [prop: string]: number;
}
