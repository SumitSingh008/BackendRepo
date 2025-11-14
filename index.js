require('dotenv').config();
const express = require('express')

const app = express()

const githubData = {
  login: "sumitKumarSingh",
  id: 123456789,
  node_id: "MDQ6VXNlcjEyMzQ1Njc4OQ==",
  avatar_url: "https://avatars.githubusercontent.com/u/123456789?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sumitKumarSingh"
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('This is Twitter endpoint')
})

app.get('/login', (req, res) => {
    res.send('<h1>SUMIT</h1>');
})

app.get('/github', (req, res) => {
  res.json(githubData);
})

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});