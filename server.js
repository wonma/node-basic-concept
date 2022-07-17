const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('<h1>holaaaaaaa</h1>');
});

app.post('/profile', (req, res) => {
  console.log(req.body);
  res.send('success');
});

app.listen(3000);
