const mysql = require("mysql");
// const dotenv = require('dotenv');

// dotenv.config();

// const {
//   DB_USER,
//   DB_PASSWORD,
//   DB_HOST,
//   DB_PORT,
//   DB_DATABASE,
// } = process.env;

const DB_HOST = "localhost";
const DB_USER = "root";
const DB_PASS = "";
const DB_NAME = "tandem_trivia";

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

// const saveUser = ({ user }) => {
//   console.log("saving user");
//   connection.query("update user set user = ? ", [user], (err, user) => {
//     if (err) {
//       console.log("didn't save user", err);
//     } else {
//       console.log("saved user to db", user);
//     }
//   });
// };

// const saveVote = ({ score, user }) => {
//   console.log("saving vote");
//   connection.query(
//     "update score set score = ? where user = ?",
//     [score, user],
//     (err, user) => {
//       if (err) {
//         console.log("didn't save score", err);
//       } else {
//         console.log("saved score to db", score);
//       }
//     }
//   );
// };

module.exports.saveUser = saveUser;
// module.exports.saveScore = saveScore;
