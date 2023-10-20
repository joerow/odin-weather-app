function Location(city, currentCondition, currentTempC) {
  this.city = city;
  this.currentCondition = currentCondition;
  this.currentTempC = currentTempC;
}

const searchBox = document.getElementById("searchInput");
const city = document.getElementById("city");
const currentCondition = document.getElementById("currentCondition");
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
    console.log(weatherData.location.name);
    console.log(weatherData.current.condition.text);
    console.log(weatherData.current.temp_c);
    console.log(searchedLocation);
    city.textContent = "City: " + weatherData.location.name;
    currentCondition.textContent =
      "Currently: " + weatherData.current.condition.text;
    temperature.textContent =
      "Temperature: " + weatherData.current.temp_c + degsym + "C";
    city.style.display = await "block";
    currentCondition.style.display = await "block";
    temperature.style.display = await "block";
    return searchedLocation;
  } catch (error) {
    console.log(error);
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
    city.style.display = "none";
    currentCondition.style.display = "none";
    temperature.style.display = "none";
    let x = processData(searchBox.value);
    console.log(x);
    searchBox.value = "";
  }
});
