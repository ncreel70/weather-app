// fetch(
//   `api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
//   { mode: "cors" }
// );

async function getData(location) {
  const API_KEY = "987a95061ac482195c723653a89a7a3e";
  const response = await fetch(
    `api.openweathermap.org/data/2.5/weather?q=${location}&appid=987a95061ac482195c723653a89a7a3e`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return console.log(response.json());
}

getData("New York");
