import { render, screen } from "@testing-library/react";
import * as React from "react";

test("renders Habit Book heading correctly", () => {
  render(<div>Habit Book</div>);
  const header = screen.getByText(/habit book/i);
  expect(header).toBeInTheDocument();
});
