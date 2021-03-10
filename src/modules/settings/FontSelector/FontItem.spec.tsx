import userEvent from "@testing-library/user-event";
import FontItem from "modules/settings/FontSelector/FontItem";
import React from "react";
import { render, screen } from "utils/test-utils";

describe("FontItem", () => {
  test("a user can see a font item", () => {
    const initialState = {
      app: {
        fontStack: "sans",
      },
    };

    const onUpdate = jest.fn();
    render(<FontItem fontStack="sans" onUpdate={onUpdate} />, { initialState });
    expect(screen.getByText(/sans/i)).toBeInTheDocument();
  });

  test("a user can see the active font selection", () => {
    const initialState = {
      app: {
        fontStack: "sans",
      },
    };
    const onUpdate = jest.fn();
    render(<FontItem fontStack="sans" onUpdate={onUpdate} />, { initialState });
    expect(screen.getByText(/sans/i)).toHaveStyle(`border: 2px solid #EE4266`);
  });

  test("a user can select a font item", () => {
    const initialState = {
      app: {
        fontStack: "sans",
      },
    };

    const onUpdate = jest.fn();
    render(<FontItem fontStack="mono" onUpdate={onUpdate} />, { initialState });
    userEvent.click(screen.getByText(/mono/i));
    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(onUpdate).toHaveBeenCalledWith("mono");
  });
});
