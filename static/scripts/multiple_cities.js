// weather object to handle all the weather data realted functions
let weather = {
  // an api key used to make requests to openweathermap api
  apiKey: "dbf1f7b24c5ac759259500cafd3b7aed",
  // method used to fetch the weather data for the list of cities specified in the parameters
  fetchWeatherData: function (cities) {
    let responses = [];
    for (let i = 0; i < cities.length; i++) {
      const res = fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          cities[i] +
          "&appid=" +
          this.apiKey
      );
      responses.push(res);
    }
    Promise.all(responses).then((response) => {
      return response.forEach((element) => {
        this.processResponse(element.json());
      });
    });
  },
  // the reponse.jso() methods returns a promise giving json data, this methods returns the data when it arrives.
  processResponse: function (prom) {
    prom.then((data) => {
      this.displayWeatherTable(data);
    });
  },
  // this method appends to the table enteries the city data for current city that is being passed to it.
  displayWeatherTable: function (data) {
    const { name } = data;
    const { main, description } = data.weather[0];
    const { temp, pressure, humidity } = data.main;
    const { speed } = data.wind;
    const table = document.querySelector(".table-data");
    row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = main;
    row.insertCell(2).innerHTML = description;
    row.insertCell(3).innerHTML = temp;
    row.insertCell(4).innerHTML = pressure;
    row.insertCell(5).innerHTML = humidity;
    row.insertCell(6).innerHTML = speed;
  },
  // the method clears the table data when a new request is made
  deleteTableData: function () {
    const table = document.querySelector(".table-data");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  },
  // it parses only the selected values from html select tag and calls fetchWeatherData
  getSelectedValues: function (elements) {
    this.deleteTableData();
    const cityList = [];
    for (const element of elements) {
      if (element.selected) {
        cityList.push(element.value);
      }
    }
    this.fetchWeatherData(cityList);
  },
};

// fetches the select element html page at button click
document.querySelector(".search button").addEventListener("click", function () {
  weather.getSelectedValues(document.querySelector(".cities"));
});

// default operation when the site is first loaded
weather.fetchWeatherData(["New York", "Pittsburgh", "Washington"]);
