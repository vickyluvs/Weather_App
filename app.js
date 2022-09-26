// let form = document.getElementById("search-form");

// function search(event) {
//   event.preventDefault();
//   let searchText = document.getElementById("search-text");
//   let cityName = document.getElementById("city-name");
//   if (searchText.value) {
//     cityName.innerHTML = searchText.value;
//   } else {
//     alert("Please type a city");
//   }
// }
// form.addEventListener("submit", search);

//button element selected
let button = document.getElementById("button");
// function to show the current temperature of searched city
function showTemperature(response) {
  console.log(response.data);

  let currentTemp = document.getElementById("current-temp");
  let temperature = Math.round(response.data.temp);
  currentTemp.innerHTML = `${temperature}`;

  let weatherDescription = document.getElementById("weather-description");

  weatherDescription.innerHTML = response.data.weather[0].description;

  let cityName = document.querySelector(".city").value;
  cityName.innerHTML = response.data.name;

  let apiKey = "d417dcae40bc2026fb7e1b8aa2e3cf7d";

  // open weather apiUrl
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
}

// Make a request from the api using axios library

button.addEventListener("click", showTemperature);
axios.get(apiUrl).then(showTemperature);
