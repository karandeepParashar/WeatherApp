<!-- ABOUT THE PROJECT -->

## About The Project

This is a weatherApp built by Karandeep Parashar. It includes a webserver built using http module and serves two routes `/my-weather-app/single-search` and `/my-weather-app/multiple-search`.

In single search, user can search for a city using textbox given. If the city is invalid, it is alerted to the user and further errors are handled as they arrive from openweathermap api.

In multiple search, user can select multiple cities from select given. No errors are handled in this case as cities are predefined.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Javascript](https://www.javascript.com/)
- [http](https://nodejs.org/api/http.html)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [HTML](https://html.com/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Following are the prerequisites for running the project. Please have npm and node installed. Below is the link if you don't have it already installed.

- npm and node
  ```sh
  https://nodejs.org/en/download/
  ```

### Installation

_For running the project please follow the following commands._

1. Clone the repo
   ```sh
   git clone https://github.com/karandeepParashar/WeatherApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter the project directory
   ```js
    node simple_server.js
   ```
4. run the webserver
   ```js
   node simple_server.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>
