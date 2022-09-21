let form = document.getElementById("search-form");

function search(event) {
  event.preventDefault();
  let searchText = document.getElementById("search-text");
  let cityName = document.querySelector(".city-name");
  if (searchText.value) {
    cityName.innerHTML = searchText.value;
  } else {
    alert("Please type a city");
  }
}
form.addEventListener("submit", search);

// open weather apiUrl
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d417dcae40bc2026fb7e1b8aa2e3cf7d&&units=imperial";

// function to show the current temperature of searched city

function showTemperature(response) {
  console.log(response.data);
  let currentTemp = document.getElementById("current-temp");
  let temperature = Math.round(response.data.main.temp);
  currentTemp.innerHTML = `${temperature}`;

  let weatherDescription = document.getElementById("weather-description");

  weatherDescription.innerHTML = response.data.weather[0].description;
}

// Make a request from the api using axios library
axios.get(apiUrl).then(showTemperature);
