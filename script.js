function Location(city, currentCondition, currentTempC) {
  this.city = city;
  this.currentCondition = currentCondition;
  this.currentTempC = currentTempC;
}

const searchBox = document.getElementById("searchInput");
const city = document.getElementById("city");
const currentCondition = document.getElementById("currentCondition");
const temperature = document.getElementById("temperature");

async function getData(location) {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=5cbc9cc473614b2bb8773706230810&q=" +
        location +
        "&aqi=yes",
      { mode: "cors" }
    );
    const weatherData = await response.json();
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
    city.textContent = weatherData.location.name;
    currentCondition.textContent = weatherData.current.condition.text;
    temperature.textContent = weatherData.current.temp_c;
    return searchedLocation;
  } catch (error) {
    console.log(error);
  }
}

// async function processData(weatherData) {
//   console.log("from data P");
//   await console.log(weatherData);
// }
// console.log(getData("sheffield"));
//processData(searchedLocation);

async function processData(location) {
  let somedata = getData(location);
  return somedata;
}

searchBox.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    console.log("enter pressed");
    console.log(searchBox.value);
    let x = processData(searchBox.value);
    console.log(x);
    searchBox.value = "";
  }
});
