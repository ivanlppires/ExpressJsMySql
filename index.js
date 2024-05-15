const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/add', (req, res) => {
    res.send('vou cadastrar alguma coisa');
})
app.put('/update', (req, res) => {
    res.send('vou atualizar alguma coisa');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})