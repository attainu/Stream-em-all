const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello I am working');
});


app.listen(5000, () => {
  console.log('http://localhost:5000');
});
