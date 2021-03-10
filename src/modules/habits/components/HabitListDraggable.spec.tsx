import useHabits from "hooks/useHabits";
import HabitListDraggable from "modules/habits/components/HabitListDraggable";
import React from "react";
import { render, screen } from "utils/test-utils";
import content from "config/content.json";
import useEditHabit from "hooks/useEditHabit";

jest.mock("hooks/useHabits");
jest.mock("hooks/useEditHabit");

describe("HabitListDraggable", () => {
  test("a user can see an empty state when there are no habits", () => {
    (useHabits as jest.Mock).mockImplementation(() => ({
      data: [],
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    }));

    render(<HabitListDraggable />);
    expect(screen.getByText(content.habitListEmpty)).toBeInTheDocument();
  });

  test("a user can see a skeleton state when the page is loading", () => {
    (useHabits as jest.Mock).mockImplementation(() => ({
      data: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
    }));

    render(<HabitListDraggable />);
    expect(screen.getAllByTestId("skeleton")).toHaveLength(5);
  });

  test("a user can view a list of habits", () => {
    (useHabits as jest.Mock).mockImplementation(() => ({
      data: [
        {
          name: "Meditation",
          id: 1,
        },
        {
          name: "Pushups",
          id: 2,
        },
      ],
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    }));

    (useEditHabit as jest.Mock).mockImplementation(() => ({
      mutate: jest.fn(),
    }));

    render(<HabitListDraggable />);
    expect(screen.getByText(/meditation/i)).toBeInTheDocument();
    expect(screen.getByText(/pushups/i)).toBeInTheDocument();
  });
});
