const fs = require("fs");
const dayjs = require("dayjs");

const fractions = [""];
const percentages = [];
const h = [
  {
    id: "1",
    label: "Pushups",
    done: true,
    order: 1,
  },
  {
    id: "2",
    label: "Code",
    done: true,
    order: 2,
  },
  {
    id: "3",
    label: "Spin",
    done: true,
    order: 3,
  },
];
const months = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const generateScore = () => {
  const fraction = "";
  const percentage = "";

  return {
    fraction,
    percentage,
  };
};

const generateMonth = () => {
  const weeks = [];

  return {
    weeks,
  };
};

const generateMonthsData = () => {
  let monthData = [];

  months.forEach((m) => {
    const d = new Date(2020, m);
    const daysInMonth = dayjs(d).daysInMonth();
    const totalHabitsPossible = daysInMonth * 3;
    const completedPercentage = 0.6;
    const totalHabitsCompleted = Math.floor(
      totalHabitsPossible * completedPercentage
    );

    monthData.push({
      month: dayjs(d).format("MMMM"),
      days: generateDaysData(daysInMonth, m),
      score: {
        fraction: `${totalHabitsCompleted}/${totalHabitsPossible}`,
        percentage: `${completedPercentage * 100}%`,
      },
    });
  });

  return monthData;
};

const generateWeeks = () => {
  const days = [];
  return {
    days,
  };
};

const generateDay = (month, day) => {
  const habits = h.map((habit) => {
    return {
      ...habit,
      done: Math.random() < 0.5,
    };
  });
  const date = new Date(2020, month, day);
  const formatted = dayjs(date).format("MM/DD");

  return {
    habits,
    date: formatted,
  };
};

const generateDaysData = (daysInMonth, m) => {
  let days = [];

  for (let x = daysInMonth; x >= 0; x--) {
    days.push(generateDay(m, x));
  }

  return days;
};

const generateData = (data, filename) => {
  const dataString = JSON.stringify(data, null, 2);
  fs.writeFileSync(`./src/data/${filename}`, dataString);
};

const init = () => {
  const data = generateMonthsData();
  generateData(data, "months.json");
};

init();
