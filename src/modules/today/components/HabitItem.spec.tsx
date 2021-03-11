import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "dayjs";
import HabitItem from "modules/today/components/HabitItem";
import React from "react";
import { screen, render } from "utils/test-utils";
import { useMutation } from "react-query";
import theme from "config/theme";

jest.mock("react-query");

describe("HabitItem", () => {
  beforeEach(() => {
    (useMutation as jest.Mock).mockImplementation(() => ({
      mutate: jest.fn(),
    }));
  });

  test("A user can view a habit label and habit done icon", () => {
    const habitEvent = {
      id: "1a",
      date: dayjs().format(REQUEST_DATE_FORMAT),
      done: false,
      habit: {
        id: "1",
        name: "Meditation",
        active: true,
      },
    };
    render(<HabitItem habitEvent={habitEvent} />);
    expect(screen.getByText(/meditation/i)).toBeInTheDocument();
    expect(screen.getByTestId("habit-item-done-icon")).toBeInTheDocument();
  });

  test("A user can view a habit in an undone state", () => {
    const habitEvent = {
      id: "1a",
      date: dayjs().format(REQUEST_DATE_FORMAT),
      done: false,
      habit: {
        id: "1",
        name: "Meditation",
        active: true,
      },
    };
    render(<HabitItem habitEvent={habitEvent} />);
    expect(screen.getByTestId("habit-item-container")).toHaveStyle(
      `border-color: ${theme.light.color.border}`
    );
  });

  test("A user can view a habit in an done state", () => {
    const habitEvent = {
      id: "1a",
      date: dayjs().format(REQUEST_DATE_FORMAT),
      done: true,
      habit: {
        id: "1",
        name: "Meditation",
        active: true,
      },
    };
    render(<HabitItem habitEvent={habitEvent} />);
    expect(screen.getByTestId("habit-item-container")).toHaveStyle(
      `border-color: ${theme.light.color.success}`
    );
  });
});
