require('dotenv').config();
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('This is Twitter endpoint')
})

app.get('/login', (req, res) => {
    res.send('<h1>SUMIT</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})