const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { apiRouter } = require("./api");

const app = express();

// const PORT = process.env.DB_PORT;
const PORT = 8080;
// const CLIENT_PATH = path.join(__dirname, "../client/dist");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(CLIENT_PATH));
app.use("/", apiRouter);

console.log(process.env.DB_PORT);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
