import StatusBar from "modules/today/TodayListStatusBar";
import React from "react";
import { screen, render } from "utils/test-utils";

describe("TodayListStatusBar", () => {
  test("A user can view a status bar", () => {
    render(<StatusBar width="50%" />);
    expect(screen.getByTestId("today-status-bar")).toBeInTheDocument();
  });

  test("A status bar has an inner element with a percentage width", () => {
    render(<StatusBar width="88%" />);
    expect(screen.getByTestId("today-status-bar-inner")).toHaveStyle(
      "width: 88%"
    );
  });
});
