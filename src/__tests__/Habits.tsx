import content from "config/content.json";
import theme from "config/theme";
import HabitList from "modules/habits/components/HabitListDraggable";
import React from "react";
import { ThemeProvider } from "styled-components";
import { render, screen } from "utils/test-utils";

// const queryClient = new QueryClient();

jest.mock("react-query");
const rq = require("react-query");

describe("Habits", () => {
  test("displays empty state when there are no habits", () => {
    rq.useQuery.mockImplementation(() => ({
      isSuccess: true,
      data: [],
    }));

    render(
      <ThemeProvider theme={theme["light"]}>
        <HabitList />
      </ThemeProvider>
    );
    expect(screen.getByText(content.habitListEmpty)).toBeInTheDocument();
  });

  test("displays skeleton state when loading", () => {
    rq.useQuery.mockImplementation(() => ({
      isLoading: true,
    }));

    render(
      <ThemeProvider theme={theme["light"]}>
        <HabitList />
      </ThemeProvider>
    );

    expect(screen.getAllByTestId("skeleton")).toHaveLength(5);
  });

  test("displays habit list", () => {
    rq.useQuery.mockImplementation(() => ({
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

    rq.useMutation.mockImplementation(() => ({
      mutate: () => null,
    }));

    render(
      <ThemeProvider theme={theme["light"]}>
        <HabitList />
      </ThemeProvider>
    );

    expect(screen.getAllByTestId("draggable-habit-item")).toHaveLength(2);
  });
});
