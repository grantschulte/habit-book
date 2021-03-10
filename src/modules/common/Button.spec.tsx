import { render, screen } from "@testing-library/react";
import theme from "config/theme";
import Button from "modules/common/Button";
import React from "react";
import { ThemeProvider } from "styled-components";

describe("Button", () => {
  test("renders text content", () => {
    render(
      <ThemeProvider theme={theme["light"]}>
        <Button>Submit</Button>
      </ThemeProvider>
    );
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  test("renders children", () => {
    render(
      <ThemeProvider theme={theme["light"]}>
        <Button>
          Start <b>now</b>
        </Button>
      </ThemeProvider>
    );
    expect(screen.getByText(/now/i)).toBeInTheDocument();
  });
});
