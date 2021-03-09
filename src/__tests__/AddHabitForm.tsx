import AddHabitForm from "modules/habits/components/AddHabitForm";
import React from "react";
import { render, screen } from "utils/test-utils";
import useAddHabit from "hooks/useAddHabit";
import userEvent from "@testing-library/user-event";
const rq = require("react-query");

jest.mock("react-query");
jest.mock("hooks/useAddHabit");

describe("AddHabitForm", () => {
  beforeEach(() => {
    (useAddHabit as jest.Mock).mockImplementation(() => ({
      mutate: jest.fn(),
    }));

    rq.useQueryClient.mockImplementation(() => ({
      getQueryData: () => [],
    }));
  });

  test("user can enter habit", () => {
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

  test("user can see alert", () => {
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
