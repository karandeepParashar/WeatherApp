//importing the http module and setting up connection parameters
// import http from "http";
// import fs from "fs";
const http = require("http");
const fs = require("fs");
const host = "localhost";
const port = 3000;

//router for the server
const router = function (req, res) {
  const path = req.url;
  console.log(path);
  if (path == "/my-weather-app/single-search" || path == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("templates/index.html").pipe(res);
  } else if (path == "/static/style/single_city.css") {
    res.writeHead(200, { "content-type": "text/css" });
    fs.createReadStream("static/style/single_city.css").pipe(res);
  } else if (path == "/static/scripts/single_city.js") {
    res.writeHead(200, { "content-type": "text/js" });
    fs.createReadStream("static/scripts/single_city.js").pipe(res);
  } else if (path == "/my-weather-app/multiple-search") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("templates/mutlipleCity.html").pipe(res);
  } else if (path == "/static/style/multiple_cities.css") {
    res.writeHead(200, { "content-type": "text/css" });
    fs.createReadStream("static/style/multiple_cities.css").pipe(res);
  } else if (path == "/static/scripts/multiple_cities.js") {
    res.writeHead(200, { "content-type": "text/js" });
    fs.createReadStream("static/scripts/multiple_cities.js").pipe(res);
  }
};
//creating the server and start listening
const server = http.createServer(router);
server.listen(port, host, () => {
  console.log(
    `Server is running on http://${host}:${port}/my-weather-app/single-search`
  );
});
