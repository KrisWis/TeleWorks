/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const http = require("http");
const fs = require("fs");

const PORT = 8080;

fs.readFile(".loki/report.html", function (err, html) {
  if (err) throw err;

  const server = http
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(PORT);

  console.log("Страница запущена по адресу: http://localhost:8080/");

  const openBrowser = require("react-dev-utils/openBrowser");
  openBrowser("http://localhost:8080/");

  setTimeout(() => {
    server.close();
  }, 2000);
});
