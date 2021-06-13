const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello Server!!");
    res.end();
  })
  .listen(3000);

// 위는 기본버전 아래는 express 버전

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
