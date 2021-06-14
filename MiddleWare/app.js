const express = require("express");
const logger = require("morgan");
const admin = require("./routes/admin");
const contacts = require("./routes/contacts");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("express start");
});

function vipMiddleWare(req, res, next) {
  console.log("최우선 미들웨어");
  next();
}

// 미들웨어 세팅
app.use(logger("dev"));

app.use("/admin", vipMiddleWare, admin);
app.use("/contacts", contacts);

app.listen(port, () => {
  console.log("Express listening on port", port);
});
