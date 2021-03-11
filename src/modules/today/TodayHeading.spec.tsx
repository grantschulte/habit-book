import dayjs from "dayjs";
import TodayHeading, {
  TODAY_DATE_FORMAT,
} from "modules/today/components/TodayHeading";
import React from "react";
import { render, screen } from "utils/test-utils";
import { useQueryClient } from "react-query";

jest.mock("react-query");

describe("TodayHeading", () => {
  beforeEach(() => {
    (useQueryClient as jest.Mock).mockImplementation(jest.fn());
  });

  test("A user can view the page with today's date", () => {
    render(<TodayHeading />);
    const date = dayjs().format(TODAY_DATE_FORMAT);
    expect(screen.getByText(date)).toBeInTheDocument();
  });

  test("A user can view refresh icon", () => {
    render(<TodayHeading showRefresh />);
    expect(screen.getByTestId("today-heading-refresh")).toBeInTheDocument();
  });
});
