let API_KEY = "486e8c3b4e813c181427099fa7b4b3de";
let weatherIcon = document.getElementById("weather_icon");
let temperature = document.getElementById("temp_value");
let tempUnit = document.getElementById("temp_unit");
let cityName = document.getElementById("city_name");
let search = document.getElementById("search_box");

const getData = async (location) => {
  location = getSearch();
  let response = "";
  if (location != "") {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`,
      { mode: "cors" }
    );
  } else {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=${API_KEY}`,
      { mode: "cors" }
    );
  }

  const weatherData = await response.json();
  return [
    (weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`),
    (temperature.innerText = Math.round(weatherData.main.temp)),
    (cityName.innerText = weatherData.name),
    (tempUnit.innerText = weatherData.temperature.unit),
  ];
};

const getSearch = () => {
  const searchInput = document.getElementById("search_box").value;
  return searchInput;
};
