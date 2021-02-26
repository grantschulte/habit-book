const fs = require("fs");
const dayjs = require("dayjs");

const generateData = (day, data = []) => {
  const formatted = day.format("YYYY-MM-DD");
  data.push(generateDay(formatted));

  if (formatted === "2021-12-31") {
    return data;
  }

  return generateData(day.add(1, "day"), data);
};

const generateDay = (day) => {
  const random = Math.floor(Math.random() * 5) + 1;

  return {
    day,
    value: random,
  };
};

const makeFile = (data, filename) => {
  const dataString = JSON.stringify(data, null, 2);
  fs.writeFileSync(`./src/data/${filename}`, dataString);
};

const init = () => {
  const start = dayjs("2021-01-01");
  let data = generateData(start);
  makeFile(data, "calendar.json");
};

init();
