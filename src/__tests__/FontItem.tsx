import userEvent from "@testing-library/user-event";
import FontItem from "modules/settings/FontSelector/FontItem";
import React from "react";
import { render, screen } from "utils/test-utils";

test("a user can see a font item", () => {
  const initialState = {
    app: {
      font: "sans",
    },
  };

  const onUpdate = jest.fn();
  render(<FontItem fontStack="sans" onUpdate={onUpdate} />, { initialState });
  expect(screen.getByText(/sans/i)).toBeInTheDocument();
});

test("a user can select a font item", () => {
  const initialState = {
    app: {
      font: "sans",
    },
  };

  const onUpdate = jest.fn();
  render(<FontItem fontStack="sans" onUpdate={onUpdate} />, { initialState });
  userEvent.click(screen.getByText(/sans/i));
  expect(onUpdate).toHaveBeenCalledTimes(1);
  expect(onUpdate).toHaveBeenCalledWith("sans");
});
