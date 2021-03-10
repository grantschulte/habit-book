import userEvent from "@testing-library/user-event";
import content from "config/content.json";
import useAddHabit from "hooks/useAddHabit";
import AddHabitForm from "modules/habits/components/AddHabitForm";
import React from "react";
import { useQueryClient } from "react-query";
import { render, screen } from "utils/test-utils";

jest.mock("react-query");
jest.mock("hooks/useAddHabit");

describe("AddHabitForm", () => {
  beforeEach(() => {
    (useAddHabit as jest.Mock).mockImplementation(() => ({
      mutate: jest.fn(),
    }));

    (useQueryClient as jest.Mock).mockImplementation(() => ({
      getQueryData: () => [],
    }));
  });

  test("a user can see an input with placeholder text", () => {
    render(<AddHabitForm />);
    expect(screen.getByPlaceholderText(/add habit/i)).toBeInTheDocument();
  });

  test("a user can enter a habit", () => {
    const initialState = {
      addHabitForm: {
        input: "",
        alert: null,
      },
    };

    render(<AddHabitForm />, { initialState });
    expect(screen.getByRole("textbox")).toHaveValue("");
    userEvent.type(screen.getByRole("textbox"), "New Habit");
    expect(screen.getByRole("textbox")).toHaveValue("New Habit");
  });

  test("a user cannot submit a duplicate habit", () => {
    const initialState = {
      addHabitForm: {
        input: "",
        alert: null,
      },
    };

    (useQueryClient as jest.Mock).mockImplementation(() => ({
      getQueryData: () => [
        {
          name: "Meditation",
          id: 1,
        },
      ],
    }));

    render(<AddHabitForm />, { initialState });
    userEvent.type(screen.getByRole("textbox"), "Meditation");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(content.duplicateHabitFound)).toBeInTheDocument();
  });

  test("a user cannot create more than five habits", () => {
    const initialState = {
      addHabitForm: {
        input: "",
        alert: null,
      },
    };

    (useQueryClient as jest.Mock).mockImplementation(() => ({
      getQueryData: () => [
        {
          name: "Meditation",
          id: 1,
        },
        {
          name: "Run",
          id: 2,
        },
        {
          name: "Leap",
          id: 3,
        },
        {
          name: "Dive",
          id: 4,
        },
        {
          name: "Think",
          id: 5,
        },
      ],
    }));

    render(<AddHabitForm />, { initialState });
    userEvent.type(screen.getByRole("textbox"), "Bouncing");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(content.habitMaxReached)).toBeInTheDocument();
  });

  test("a user can see alert", () => {
    const initialState = {
      addHabitForm: {
        input: "",
        alert: {
          type: "error",
          title: "Uh oh!",
          message: "Error message",
        },
      },
    };

    render(<AddHabitForm />, { initialState });
    expect(screen.getByText(/error message/i)).toHaveTextContent(
      "Error message"
    );
  });
});
