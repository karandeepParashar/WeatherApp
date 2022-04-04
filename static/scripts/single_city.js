let weather = {
  apiKey: "dbf1f7b24c5ac759259500cafd3b7aed",
  fetchWeatherData: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            alert("Sorry, " + city + " was not found, please try another");
            throw new Error("City name not found.");
          }
        }
        return response.json();
      })
      .then((data) => this.displayWeatherTable(data));
  },
  displayWeatherTable: function (data) {
    const { name } = data;
    const { main, description } = data.weather[0];
    const { temp, pressure, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerHTML = name;
    document.querySelector(".main").innerHTML = main;
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp;
    document.querySelector(".pressure").innerHTML = pressure;
    document.querySelector(".humidity").innerHTML = humidity;
    document.querySelector(".speed").innerHTML = speed;
  },
  validateInputField: function (city) {
    if (city.match(/[^a-zA-Z ]/) || city.length == 0) {
      alert('Sorry, "' + city + '" is an invalid city, please try another');
      throw new Error("Invalid city name.");
    } else {
      this.fetchWeatherData(city);
    }
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.validateInputField(document.querySelector(".search-input").value);
});

weather.fetchWeatherData("New York");
