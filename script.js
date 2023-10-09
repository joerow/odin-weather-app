async function getData(location) {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=5cbc9cc473614b2bb8773706230810&q=" +
        location +
        "&aqi=yes",
      { mode: "cors" }
    );
    const weatherData = await response.json();
    let searchedLocation = Object;
    console.log(weatherData.location.name);
    console.log(weatherData.current.condition.text);
    console.log(weatherData.current.temp_c);
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}
getData("barcelona");
