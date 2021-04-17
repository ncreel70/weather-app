// fetch(
//   `api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
//   { mode: "cors" }
// );

import API_KEY from "./config";
const getData = async (location) => {
  const response = await fetch(
    `api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  return console.log(response.json());
};

getData("New York");
