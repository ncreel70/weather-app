let API_KEY = config.API_KEY;
let weather_icon = document.getElementById("weather_icon");
let temperature = document.getElementById("temp")


const getData = async (location) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  return [weather_icon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
temperature.innerText = Math.round(weatherData.main.temp)];
};

getData("Cheyenne");
