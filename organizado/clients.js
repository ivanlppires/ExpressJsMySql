const express = require("express");
const router = express.Router();

var clients = [
  { id: 1, name: "João" },
  { id: 2, name: "Maria" },
  { id: 3, name: "José" }
];
router.get("/list", (req, res) => {
  res.json(clients);
});

module.exports = router;