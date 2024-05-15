const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  res.send("vou listar os usuários");
});

router.get("/:id", (req, res) => {
  res.send("vou buscar um usuário " + req.params.id);
});

router.post("/", (req, res) => {
  res.send("vou cadastrar um usuário");
});

router.put("/", (req, res) => {
  res.send("vou atualizar um usuário " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("vou deletar um usuário " + req.params.id);
});

module.exports = router;
