const express = require('express');

const PORT = process.env.PORT || 3000;
const NAME = 'Toy Renderer';

const app = express();

app.get('/', (req, res) => {
  res.send(NAME);
});

app.get('/status', (req, res) => {
  res.send('yesok');
});

app.listen(PORT, () => {
  console.log(`${NAME} listening on port ${PORT}!`);
});
