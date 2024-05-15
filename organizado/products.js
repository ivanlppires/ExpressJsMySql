const express = require("express");
const router = express.Router();

var products = [
  { id: 1, name: "teclado" },
  { id: 2, name: "mouse" },
  { id: 3, name: "placa-mãe" }
];
router.get("/list", (req, res) => {
  res.json(products);
});

module.exports = router;