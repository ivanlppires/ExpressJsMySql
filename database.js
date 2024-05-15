const express = require("express");
const app = express();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clients",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected");
});

app.get("/clients", (req, res) => {
  connection.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/clients", (req, res) => {
  const name = req.query.name;
  connection.query(
    `INSERT INTO users (nome) VALUES ('${name}')`,
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

app.listen(3000, () => {
  console.log(`rodando...`);
});
