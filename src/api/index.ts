import {
  API_HABITS_PATH,
  API_HABIT_EVENTS_PATH,
  API_STATS_PATH,
  API_URL,
} from "config/constants";
import { ResponseError } from "types";

interface FetchOptions {
  url: string;
  method?: "GET" | "PUT" | "POST" | "DELETE";
  body?: any;
  token: string | null;
}

/*
 * Make Fetch
 *
 *
 */

const makeFetch = ({ url, method = "GET", body, token }: FetchOptions) => {
  return fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleErrors);
};

/*
 * Handle Errors
 *
 *
 */

const handleErrors = async (res: Response) => {
  const json = await res.json();

  if (json.error) {
    throw Error(json.error);
  }

  if (!res.ok) {
    throw Error(ResponseError.BadRequest);
  }

  return json;
};

/*
 * Get Habits
 *
 *
 */

export const getHabits = (token: string | null) => {
  const url = `${API_URL}/${API_HABITS_PATH}`;
  return makeFetch({
    url,
    token,
  });
};

/*
 * Add Habit
 *
 *
 */

interface AddHabitParams {
  date: string;
  name: string;
}

export const addHabit = (params: AddHabitParams, token: string | null) => {
  const url = `${API_URL}/${API_HABITS_PATH}`;
  const body = { ...params };
  return makeFetch({
    url,
    method: "POST",
    body,
    token,
  });
};

/*
 * Update Habit
 *
 *
 */

export interface UpdateHabitParams {
  date: string;
  name?: string;
  active?: boolean;
}

export const updateHabit = (
  params: UpdateHabitParams,
  id: string,
  token: string | null
) => {
  const url = `${API_URL}/${API_HABITS_PATH}/${id}`;
  const body = {
    ...params,
  };

  return makeFetch({
    url,
    method: "PUT",
    body,
    token,
  });
};

/*
 * Get Habit Events
 *
 *
 */

interface GetHabitEventsParams {
  date: string;
}

export const getHabitEvents = (
  { date }: GetHabitEventsParams,
  token: string | null
) => {
  const url = `${API_URL}/${API_HABIT_EVENTS_PATH}?date=${date}`;
  return makeFetch({
    url,
    token,
  });
};

/*
 * Update Habit Event
 *
 *
 */

interface UpdateHabitEventsParams {
  id: string;
}

export const updateHabitEvent = (
  { id }: UpdateHabitEventsParams,
  token: string | null
) => {
  const url = `${API_URL}/${API_HABIT_EVENTS_PATH}/${id}`;

  return makeFetch({
    url,
    method: "PUT",
    token,
  });
};

/*
 * Update Habit Event
 *
 *
 */

interface GetStatsParams {
  begin: string;
  end: string;
}

export const getStats = (
  { begin, end }: GetStatsParams,
  token: string | null
) => {
  const url = `${API_URL}/${API_STATS_PATH}?begin=${begin}&end=${end}`;
  return makeFetch({
    url,
    token,
  });
};
