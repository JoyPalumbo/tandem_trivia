const { Router } = require("express");
const db = require("./db");
const bodyParser = require("body-parser");

const router = Router();
// const saveUser = require("./dbIndex");

// router.post("/user", (req, res) => {
//   console.log("post request to save user, req.body");
//   saveUser.saveUser(req.body);
// });
