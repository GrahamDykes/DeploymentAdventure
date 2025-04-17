const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3600;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Connected: " + PORT);
});

app.listen(PORT, () => {
  console.log("server is running on port: " + PORT);
});

module.exports = app;
