import { render, screen } from "@testing-library/react";
import Page from "modules/common/Page";
import React from "react";

test("Page renders with children", () => {
  const children = <div>Hello</div>;
  render(<Page>{children}</Page>);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
