const express = require("express");
const nunjucks = require("nunjucks");
const admin = require("./routes/admin");
const contacts = require("./routes/contacts");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

nunjucks.configure("templates", {
  autoescape: true,
  express: app,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("express start");
});

app.use("/admin", admin);
app.use("/contacts", contacts);

app.listen(port, () => {
  console.log("Express listening on port", port);
});
