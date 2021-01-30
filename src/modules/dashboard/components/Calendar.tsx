import React from "react";
import { ResponsiveCalendar, CalendarSvgProps } from "modules/common/Calendar";
import { useTheme } from "styled-components";
import { percentageColor } from "utils/css.utils";

const Calendar: React.FC<CalendarSvgProps> = ({
  data,
  to,
  from,
}: CalendarSvgProps) => {
  const theme = useTheme();

  return (
    <ResponsiveCalendar
      data={data}
      from={from}
      to={to}
      align="top"
      colors={[
        theme.color.green["100"],
        theme.color.green["200"],
        theme.color.green["300"],
        theme.color.green["400"],
        theme.color.green["500"],
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
      emptyColor={percentageColor(theme.color.background, -10)}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      yearSpacing={40}
      monthBorderColor={theme.color.background}
      dayBorderWidth={2}
      dayBorderColor={theme.color.background}
    />
  );
};

export default Calendar;
