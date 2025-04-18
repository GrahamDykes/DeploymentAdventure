const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3600;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Connected: " + PORT);
// });

//Im not sure this is wtf dude is talking about
//ok, so this blanks out one entry after .com.  transforming cryptic.llc/backend/letswritecode to cryptic.llc/letwrite code.  so to get to /backend, you would have to put in cryptic.llc/backend/backend.
app.use((req, res, next) => {
  req.url = req.url.replace(/^\/[^\/]+/, "");
  next();
});

app.get("/backend", (req, res) => {
  res.send("Backend is connected! @ " + PORT);
});

app.get("/letswritecode", (req, res) => {
  res.send("Following dummy's instructions @ " + PORT);
});

app.listen(PORT, () => {
  console.log("server is running on port: " + PORT);
});

module.exports = app;
