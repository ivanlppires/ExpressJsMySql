const express = require("express");
const app = express();
const port = 3000;

app.all("/*", (req, res, next) => {
  console.log("params", req.params);
  console.log("query", req.query);
  next();
});

app
  .route("/user/:id")
  .get((req, res) => {
    res.send("vou buscar um usuário " + req.params.id);
  })
  .post((req, res) => {
    res.send("vou cadastrar um usuário");
  })
  .put((req, res) => {
    res.send("vou atualizar um usuário");
  })
  .delete((req, res) => {
    res.send("vou deletar um usuário");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
