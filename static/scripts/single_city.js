// weather object to handle all the weather data realted functions
let weather = {
  // an api key used to make requests to openweathermap api
  apiKey: "dbf1f7b24c5ac759259500cafd3b7aed",
  // method used to fetch the weather data for the city specified in the parameters
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
  // displays the weather data from fetchWeatherData to user in html page
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
  // incoming text data from user is parsed for invalid city name, including having special characters or no value
  validateInputField: function (city) {
    if (city.match(/[^a-zA-Z ]/) || city.length == 0) {
      alert('Sorry, "' + city + '" is an invalid city, please try another');
      throw new Error("Invalid city name.");
    } else {
      this.fetchWeatherData(city);
    }
  },
};

// fetches the city name from input box of html page at button click
document.querySelector(".search button").addEventListener("click", function () {
  weather.validateInputField(document.querySelector(".search-input").value);
});

// default operation when the site is first loaded
weather.fetchWeatherData("New York");
