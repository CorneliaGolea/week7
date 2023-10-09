const express = require("express");

const app = express();
// http://localhost:5001/
// app.use("/example", express.static("example"));

app.use("/", express.static("home"));

app.use("/about", express.static("about"));

app.use("/contact", express.static("contact"));

app.listen(5001, () => {
  console.log("Server is listening");
});
