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

These are the instructions on setting up your project locally.

### Prerequisites

Following are the prerequisites for running the project. Please have npm and node installed. Below is the link if you don't have it already installed.

The webserver runs on the port 3000, it should not be preoccupied for the server to run.

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
2. Enter the project directory.
   ```sh
   cd [-your-directory-]
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. run the webserver

   ```js
   node simple_server.js
   ```

5. Open your chrome or Microsoft Edge browser to url: `http://localhost:3000/my-weather-app/single-search`

<p align="right">(<a href="#top">back to top</a>)</p>
