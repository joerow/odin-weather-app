function Location(city, currentCondition, currentTempC) {
  this.city = city;
  this.currentCondition = currentCondition;
  this.currentTempC = currentTempC;
}

const searchBox = document.getElementById("searchInput");
const cityContainer = document.getElementById("city-container");
const city = document.getElementById("city");
const currentConditionContainer = document.getElementById(
  "current-condition-container"
);
const currentCondition = document.getElementById("current-condition");
const currentConditionImage = document.getElementById(
  "current-condition-image"
);
const temperatureContainer = document.getElementById("temperature-container");
const temperature = document.getElementById("temperature");
const degsym = "\xB0";
const loader = document.getElementById("loader");

async function getData(location) {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=5cbc9cc473614b2bb8773706230810&q=" +
        location +
        "&aqi=yes",
      { mode: "cors" }
    );
    const weatherData = await response.json();
    loader.style.display = await "none";
    const searchedLocation = new Location(
      weatherData.location.name,
      weatherData.current.condition.text,
      weatherData.current.temp_c
    );
    console.log(weatherData);
    console.log(searchedLocation);
    city.textContent = weatherData.location.name;
    currentCondition.textContent = weatherData.current.condition.text;
    currentConditionImage.src = "https:" + weatherData.current.condition.icon;
    console.log(weatherData.current.condition.icon);
    temperature.textContent = weatherData.current.temp_c + degsym + "C";
    cityContainer.style.display = await "flex";
    currentConditionContainer.style.display = await "flex";
    temperatureContainer.style.display = await "flex";
    return searchedLocation;
  } catch (error) {
    if (error.message === "weatherData.location is undefined") {
      currentCondition.textContent = location + " not found";
      currentConditionContainer.style.display = await "flex";
    } else {
      console.log(error);
      console.log(error.message);
      console.log(error.name);
    }
  }
}

async function processData(location) {
  let somedata = getData(location);

  return somedata;
}

searchBox.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    console.log("enter pressed");
    loader.style.display = "block";
    console.log(searchBox.value);
    cityContainer.style.display = "none";
    currentConditionContainer.style.display = "none";
    temperatureContainer.style.display = "none";
    let x = processData(searchBox.value);
    console.log(x);
    searchBox.value = "";
  }
});
