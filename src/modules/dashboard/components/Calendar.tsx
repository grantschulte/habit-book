import React from "react";
import { ResponsiveCalendar, CalendarSvgProps } from "lib/Calendar";
import { useTheme } from "styled-components";

const Calendar: React.FC<CalendarSvgProps> = ({
  data,
  to,
  from,
  direction,
}) => {
  const theme = useTheme();

  return (
    <ResponsiveCalendar
      data={data}
      from={from}
      to={to}
      align="top"
      direction={direction}
      colors={[
        theme.color.green["100"],
        theme.color.green["300"],
        theme.color.green["500"],
        theme.color.green["700"],
        theme.color.green["800"],
      ]}
      theme={{
        fontSize: 12,
        fontFamily: theme.font.body,
        textColor: theme.color.text,
        labels: {
          text: {
            fontWeight: "bold",
          },
        },
      }}
      emptyColor={theme.color.backgroundAlt}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      yearSpacing={40}
      monthBorderColor={theme.color.background}
      dayBorderWidth={2}
      dayBorderColor={theme.color.background}
    />
  );
};

export default Calendar;
