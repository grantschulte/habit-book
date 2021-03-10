import content from "config/content.json";
import HabitList from "modules/habits/components/HabitListDraggable";
import React from "react";
import { render, screen } from "utils/test-utils";
import { useQuery, useMutation } from "react-query";

jest.mock("react-query");

describe("Habits", () => {
  test("displays empty state when there are no habits", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      isSuccess: true,
      data: [],
    }));

    render(<HabitList />);
    expect(screen.getByText(content.habitListEmpty)).toBeInTheDocument();
  });

  test("displays skeleton state when loading", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }));

    render(<HabitList />);
    expect(screen.getAllByTestId("skeleton")).toHaveLength(5);
  });

  test("displays habit list", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      isSuccess: true,
      data: [
        {
          id: 1,
          name: "Pushups",
          active: true,
        },
        {
          id: 2,
          name: "Meditation",
          active: true,
        },
      ],
    }));

    (useMutation as jest.Mock).mockImplementation(() => ({
      mutate: () => null,
    }));

    render(<HabitList />);
    expect(screen.getAllByTestId("draggable-habit-item")).toHaveLength(2);
  });
});
