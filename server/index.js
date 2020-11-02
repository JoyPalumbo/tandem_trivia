const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { apiRouter } = require("./api");
//  import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const app = express();

// const PORT = process.env.DB_PORT;
const PORT = 8080;
// const CLIENT_PATH = path.join(__dirname, "../client/dist");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(CLIENT_PATH));
// app.use("/", apiRouter);
// app.use(Router);

console.log(process.env.DB_PORT);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
