require("dotenv").config({ override: true });

const favicon = require("serve-favicon");
const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());

app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/route", require("./api/route"));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
