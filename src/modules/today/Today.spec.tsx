import { screen, render } from "utils/test-utils";
import { useQuery, useQueryClient, useMutation } from "react-query";
import React from "react";
import Today from "modules/today/Today";
import content from "config/content.json";
import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "dayjs";

jest.mock("react-query");

describe("Today", () => {
  beforeEach(() => {
    (useQueryClient as jest.Mock).mockImplementation(() => ({
      getQueryData: () => [],
    }));

    (useMutation as jest.Mock).mockImplementation(() => ({
      mutate: jest.fn(),
    }));
  });

  test("A user can view the skeleton loading state", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: [],
      isLoading: true,
      isSuccess: false,
    }));
    render(<Today />);
    expect(screen.getAllByTestId("skeleton")).toHaveLength(5);
  });

  test("A user can view an empty state", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: [],
      isLoading: false,
      isSuccess: true,
    }));
    render(<Today />);
    expect(screen.getByText(content.todayNoHabits)).toBeInTheDocument();
  });

  test("A user can view a list of habits", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: [
        {
          id: "1a",
          date: dayjs().format(REQUEST_DATE_FORMAT),
          done: false,
          habit: {
            name: "Meditation",
            id: "1",
            active: true,
          },
        },
        {
          id: "2a",
          date: dayjs().format(REQUEST_DATE_FORMAT),
          done: false,
          habit: {
            name: "Pushups",
            id: "2",
            active: true,
          },
        },
      ],
      isLoading: false,
      isSuccess: true,
    }));

    render(<Today />);
    expect(screen.getByText(/meditation/i)).toBeInTheDocument();
    expect(screen.getByText(/pushups/i)).toBeInTheDocument();
  });

  test("A user can view success alert when all habits are complete", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: [
        {
          id: "1a",
          date: dayjs().format(REQUEST_DATE_FORMAT),
          done: true,
          habit: {
            name: "Meditation",
            id: "1",
            active: true,
          },
        },
        {
          id: "2a",
          date: dayjs().format(REQUEST_DATE_FORMAT),
          done: true,
          habit: {
            name: "Pushups",
            id: "2",
            active: true,
          },
        },
      ],
      isLoading: false,
      isSuccess: true,
    }));

    render(<Today />);
    expect(screen.getByText(content.todayHabitsCompleted)).toBeInTheDocument();
  });
});
