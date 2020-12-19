import React from "react";
import dayjs, { Dayjs } from "dayjs";

type FormatDate = (date: Date, format: string) => string;

export type DateContextProps = {
  date: Dayjs;
  day: number;
  formatted: {
    day: string;
    dayName: string;
    month: string;
    monthName: string;
    year: string;
    full: string;
  };
  format: FormatDate;
};

const DateContext: React.Context<
  DateContextProps | undefined
> = React.createContext<DateContextProps | undefined>(undefined);

export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const date = dayjs();
  const day = date.day();
  const formatted = {
    day: date.format("D"),
    dayName: date.format("dddd"),
    month: date.format("M"),
    monthName: date.format("MMMM"),
    year: date.format("YYYY"),
    full: date.format("dddd, MMMM D, YYYY"),
  };

  return (
    <DateContext.Provider
      value={{
        date,
        day,
        formatted,
        format: formatDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => {
  const context = React.useContext(DateContext);
  if (context === undefined) {
    throw new Error("useDate must be used within a DateProvider");
  }
  return context;
};

const formatDate: FormatDate = (date: Date, format: string) => {
  return dayjs(date).format(format);
};

export default DateContext;
