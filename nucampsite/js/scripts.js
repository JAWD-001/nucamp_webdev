console.log("javascript connected!");
const weatherDiv = document.getElementById("weather");
console.log(weatherDiv);

const carousel = new bootstrap.Carousel("#homeCarousel", {
  interval: 3000,
  pause: false,
});

const carouselButton = document.querySelector("#carouselButton");
const faIcon = document.querySelector("#faButton");

carouselButton.addEventListener("click", function () {
  if (faIcon.classList.contains("fa-pause")) {
    faIcon.classList.remove("fa-pause");
    faIcon.classList.add("fa-play");
    carousel.pause();
  } else {
    faIcon.classList.remove("fa-play");
    faIcon.classList.add("fa-pause");
    carousel.cycle();
  }
});

async function fetchWeather() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const city = "Denver";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  try {
    response = await fetch(url);
    data = await response.json();
    console.log(data);
    displayWeather(data);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

function displayWeather(weatherData) {
  const weather = weatherData.weather[0];
  const temp = weatherData.main.temp;
  const icon = weather.icon;
  const description = weather.description;
  const humidity = weatherData.main.humidity;
  console.log(`${temp} ${icon} ${description}`);

  //make temp element
  const tempEl = document.createElement("label");
  tempEl.textContent = `${temp}\u00B0`;
  addWeatherDivClass(tempEl);
  weatherDiv.appendChild(tempEl);

  //make img element
  const img = document.createElement("img");
  img.src = `https://openweathermap.org/img/w/${icon}.png`;
  img.alt = "weather icon";
  addWeatherDivClass(img);
  weatherDiv.appendChild(img);

  //make description element
  const descriptionEl = document.createElement("label");
  descriptionEl.textContent = description;
  addWeatherDivClass(descriptionEl);
  weatherDiv.appendChild(descriptionEl);
}

function addWeatherDivClass(element) {
  element.classList.add("weatherDivEl");
}

fetchWeather();
