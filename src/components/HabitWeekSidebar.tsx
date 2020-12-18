import React from "react";
import styled from "styled-components";
import moment from "moment";

type WeekItem = {
  label: string;
  value: number;
};

const StyledHabitWeekSidebar = styled.div`
  padding: 1rem;
  margin: 1rem;
  margin-top: 0;
  background: #efefef;
  border-radius: 4px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: scroll;
`;

const WeekList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledWeekListItem = styled.li<{ active?: boolean }>`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => (props.active ? "red" : "pink")};
`;

const createWeekObjects: (n: number) => WeekItem[] = (n: number) => {
  let a = [];
  for (let x = 1; x <= n; x++) {
    const label: string = x < 10 ? `0${x}` : x.toString();
    a.push({
      label,
      value: x,
    });
  }
  return a;
};

type WeekListItemProps = { w: string; active?: boolean };

const WeekListItem: React.FC<WeekListItemProps> = (
  props: WeekListItemProps
) => {
  return (
    <StyledWeekListItem active={props.active}>{props.w}</StyledWeekListItem>
  );
};

const HabitWeekSidebar: React.FC = () => {
  const weeksInYear: number = moment().weeksInYear();
  const weeksArray: WeekItem[] = createWeekObjects(weeksInYear);
  const currentWeek: number = moment().week();
  const weekElements: JSX.Element[] = weeksArray.map((w: WeekItem) => {
    const active: boolean = w.value === currentWeek;
    return <WeekListItem key={w.label} w={w.label} active={active} />;
  });
  return (
    <StyledHabitWeekSidebar>
      <WeekList>{weekElements}</WeekList>
    </StyledHabitWeekSidebar>
  );
};

export default HabitWeekSidebar;
