const express = require("express");
const app = express();
const port = 3000;
const users = require("./users.js");
const clients = require("./clients.js");
const products = require("./products.js");

app.use("/user", users);
app.use("/client", clients);
app.use("/product", products);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});