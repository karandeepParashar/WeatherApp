//importing the http module and setting up connection parameters
const http = require("http");
const fs = require("fs");
const host = "localhost";
const port = 3000;

//routes for incoming requests
const routes = function (req, res) {
  switch (req.url) {
    case "/my-weather-app/single-search":
      res.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream("templates/index.html").pipe(res);
      break;
    case "/my-weather-app/multiple-search":
      res.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream("templates/mutlipleCity.html").pipe(res);
      break;
    case "/static/style/single_city.css":
      res.writeHead(200, { "content-type": "text/css" });
      fs.createReadStream("static/style/single_city.css").pipe(res);
      break;
    case "/static/style/multiple_cities.css":
      res.writeHead(200, { "content-type": "text/css" });
      fs.createReadStream("static/style/multiple_cities.css").pipe(res);
      break;
    case "/static/scripts/single_city.js":
      res.writeHead(200, { "content-type": "text/js" });
      fs.createReadStream("static/scripts/single_city.js").pipe(res);
      break;
    case "/static/scripts/multiple_cities.js":
      res.writeHead(200, { "content-type": "text/js" });
      fs.createReadStream("static/scripts/multiple_cities.js").pipe(res);
      break;
    default:
      res.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream("templates/index.html").pipe(res);
  }
};

//creating the server and start listening
const server = http.createServer(routes);
server.listen(port, host, () => {
  console.log(
    `Server is running on http://${host}:${port}/my-weather-app/single-search`
  );
});
