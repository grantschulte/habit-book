import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "dayjs";
import TodayHabitList from "modules/today/components/TodayHabitList";
import React from "react";
import { screen, render } from "utils/test-utils";
import { useQueryClient, useMutation } from "react-query";
import userEvent from "@testing-library/user-event";

jest.mock("react-query");

const habitEvents = [
  {
    id: "1a",
    date: dayjs().format(REQUEST_DATE_FORMAT),
    done: false,
    habit: {
      id: "1",
      name: "Meditation",
      active: true,
    },
  },
  {
    id: "2a",
    date: dayjs().format(REQUEST_DATE_FORMAT),
    done: false,
    habit: {
      id: "2",
      name: "Pushups",
      active: true,
    },
  },
];

describe("TodayHabitList", () => {
  beforeEach(() => {
    (useQueryClient as jest.Mock).mockImplementation(() => ({
      getQueryData: () => [],
    }));

    (useMutation as jest.Mock).mockImplementation(() => ({
      mutate: jest.fn(),
    }));
  });

  test("A user can view a list of habits", () => {
    render(<TodayHabitList habitEvents={habitEvents} />);
    expect(screen.getByText(/meditation/i)).toBeInTheDocument();
    expect(screen.getByText(/pushups/i)).toBeInTheDocument();
  });
});
